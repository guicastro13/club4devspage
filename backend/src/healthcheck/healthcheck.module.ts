import { Module } from '@nestjs/common';
import { HealthController } from './healthcheck.controller';
import { HealthCheckCronService } from './healthcheck.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [HealthController],
  providers: [HealthCheckCronService],
})
export class HealthModule {}
