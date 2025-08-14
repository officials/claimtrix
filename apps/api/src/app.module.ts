import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';

import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AirdropsModule } from './modules/airdrops/airdrops.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { Web3Module } from './modules/web3/web3.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { HealthModule } from './modules/health/health.module';

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
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100  // 100 requests per minute
      }
    ]),
    
    // Task scheduling
    ScheduleModule.forRoot(),
    
    // Core modules
    PrismaModule,
    HealthModule,
    
    // Feature modules
    AuthModule,
    UsersModule,
    AirdropsModule,
    PortfolioModule,
    AnalyticsModule,
    Web3Module,
    NotificationsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
