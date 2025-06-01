import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;

  app.enableCors();

  const requestLogger = new Logger('HTTP');
  app.use((req: Request, res: Response, next: NextFunction) => {
    requestLogger.log(
      `[${new Date().toISOString()}] Recebida requisição: ${req.method} ${req.originalUrl}`,
    );
    next();
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port);
  Logger.log(`🚀 Aplicação rodando na porta ${port}`, 'Bootstrap');
}
bootstrap();
