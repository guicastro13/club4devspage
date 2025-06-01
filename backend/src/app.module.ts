import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscribersModule } from './subscribers/subscribers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    SubscribersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
