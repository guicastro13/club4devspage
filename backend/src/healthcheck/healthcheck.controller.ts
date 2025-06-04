import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      message: 'Servidor está funcionando perfeitamente!',
      timestamp: new Date().toISOString(),
    };
  }
}
