import { Module } from '@nestjs/common';
import { HealthController } from './healthcheck.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { HealthCheckCronService } from './healthcheck.service';

@Module({
  controllers: [HealthController],
  providers: [HealthCheckCronService],
})
export class HealthModule {}
