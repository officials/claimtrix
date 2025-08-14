import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');
  
  const port = configService.get('PORT') || 3001;
  const nodeEnv = configService.get('NODE_ENV') || 'development';
  
  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: nodeEnv === 'production',
    crossOriginEmbedderPolicy: false
  }));
  
  // Compression and parsing
  app.use(compression());
  app.use(cookieParser());
  
  // CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      configService.get('CLIENT_URL')
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With']
  });
  
  // Global prefix for API routes
  app.setGlobalPrefix('api', {
    exclude: ['/', '/health', '/_next/*', '/static/*']
  });
  
  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );
  
  // Swagger documentation (development only)
  if (nodeEnv !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('ClaimTrix API')
      .setDescription('空投矩阵平台 API 文档')
      .setVersion('1.0.0')
      .addBearerAuth()
      .addTag('auth', '认证相关')
      .addTag('airdrops', '空投管理')
      .addTag('users', '用户管理')
      .addTag('analytics', '数据分析')
      .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      customSiteTitle: 'ClaimTrix API Documentation',
      customCss: '.swagger-ui .topbar { display: none }'
    });
  }
  
  // Graceful shutdown
  process.on('SIGTERM', () => {
    logger.log('SIGTERM received, shutting down gracefully');
    app.close();
  });
  
  process.on('SIGINT', () => {
    logger.log('SIGINT received, shutting down gracefully');
    app.close();
  });
  
  await app.listen(port);
  
  logger.log(`🚀 ClaimTrix Server running on http://localhost:${port}`);
  logger.log(`📚 API Documentation: http://localhost:${port}/api/docs`);
  logger.log(`🌍 Environment: ${nodeEnv}`);
}

bootstrap().catch((error) => {
  console.error('❌ Failed to start application:', error);
  process.exit(1);
});
