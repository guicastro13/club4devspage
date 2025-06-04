import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscribersModule } from './subscribers/subscribers.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './healthcheck/healthcheck.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ScheduleModule.forRoot(),
    HttpModule,
    DatabaseModule,
    SubscribersModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
