import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HealthCheckCronService {
  private readonly logger = new Logger(HealthCheckCronService.name);
  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    this.logger.log('Executando health check agendado...');
    try {
      const healthCheckUrl =
        process.env.HEALTH_CHECK_URL || 'http://localhost:3001/health';

      const response = await firstValueFrom(
        this.httpService.get(healthCheckUrl),
      );

      if (response.status === 200 && response.data?.status === 'ok') {
        this.logger.log(
          'Health check bem-sucedido! O servidor está respondendo.',
        );
      } else {
        this.logger.error(
          `Health check falhou. Status: ${response.status}, Data: ${JSON.stringify(response.data)}`,
        );
      }
    } catch (error) {
      this.logger.error('Erro ao executar o health check:', error.message);
      if (error.response) {
        this.logger.error(
          `Detalhes da resposta do erro: Status ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`,
        );
      }
    }
  }
}
