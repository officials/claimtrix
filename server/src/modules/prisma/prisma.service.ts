import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL')
        }
      },
      log: configService.get('NODE_ENV') === 'development' 
        ? ['query', 'info', 'warn', 'error'] 
        : ['error']
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('📊 Database connected successfully');
    } catch (error) {
      this.logger.error('❌ Database connection failed:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('📊 Database disconnected');
  }

  async cleanDb() {
    if (this.configService.get('NODE_ENV') === 'production') {
      throw new Error('Cannot clean database in production');
    }

    // Clean database for testing
    const modelNames = Reflect.ownKeys(this)
      .filter(key => key[0] !== '_')
      .filter(key => typeof (this as any)[key] === 'object')
      .filter(key => (this as any)[key].deleteMany)
      .map(key => key as string);

    await Promise.all(
      modelNames.map(modelName => (this as any)[modelName].deleteMany({}))
    );
  }
}
