import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL')
        }
      },
      log: configService.get('NODE_ENV') === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('📊 Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('📊 Database disconnected');
  }

  async cleanDb() {
    if (this.configService.get('NODE_ENV') === 'production') {
      throw new Error('Cannot clean database in production');
    }

    // Delete in reverse order of foreign key dependencies
    const modelNames = Reflect.ownKeys(this)
      .filter(key => key[0] !== '_' && key !== '$on' && key !== '$connect' && key !== '$disconnect' && key !== '$use' && key !== '$transaction')
      .map(key => key as string);

    for (const modelName of modelNames) {
      await (this as any)[modelName].deleteMany({});
    }
  }
}
