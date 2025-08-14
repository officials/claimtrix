import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getApiInfo() {
    return {
      name: 'ClaimTrix API',
      version: '1.0.0',
      description: '空投矩阵平台 API',
      environment: this.configService.get('NODE_ENV'),
      timestamp: new Date().toISOString(),
      endpoints: {
        docs: '/api/docs',
        health: '/api/health',
        auth: '/api/auth',
        airdrops: '/api/airdrops',
        users: '/api/users',
        portfolio: '/api/portfolio',
        analytics: '/api/analytics'
      }
    };
  }

  getHealth() {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version,
      environment: this.configService.get('NODE_ENV')
    };
  }
}
