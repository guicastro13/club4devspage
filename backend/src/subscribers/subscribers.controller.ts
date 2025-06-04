import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { SubscribersService } from './subscribers.service';
import { SubscribeDto } from './dto/subscribe.dto';

@Controller('api')
export class SubscribersController {
  private readonly logger = new Logger(SubscribersController.name);

  constructor(private readonly subscribersService: SubscribersService) {}

  @Post('subscribe')
  async subscribe(
    @Body() subscribeDto: SubscribeDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const result = await this.subscribersService.subscribe(subscribeDto);
      if (result.existing) {
        res.status(HttpStatus.OK);
        return { message: result.message };
      }
      res.status(HttpStatus.CREATED);
      return { message: result.message };
    } catch (error) {
      this.logger.error(
        `Falha ao inscrever e-mail ${subscribeDto.email}: ${error.message}`,
        error.stack,
      );
      throw new HttpException(
        'Ops! Tivemos um problema aqui no servidor. Tente de novo.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('subscribers')
  async getSubscribers() {
    try {
      return await this.subscribersService.findAll();
    } catch (error) {
      this.logger.error(
        `Falha ao buscar inscritos: ${error.message}`,
        error.stack,
      );
      throw new HttpException(
        'Erro interno ao buscar os dados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
