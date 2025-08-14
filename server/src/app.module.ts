import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AirdropsModule } from './modules/airdrops/airdrops.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { RenderModule } from './modules/render/render.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      cache: true
    }),
    
    // Rate limiting
    ThrottlerModule.forRoot([{
      ttl: 60000, // 1 minute
      limit: 100  // 100 requests per minute
    }]),
    
    // Serve static files for SSR
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
      exclude: ['/api*'],
      serveRoot: '/static'
    }),
    
    // Core modules
    PrismaModule,
    
    // Feature modules
    AuthModule,
    UsersModule,
    AirdropsModule,
    AnalyticsModule,
    
    // SSR module (must be last)
    RenderModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
