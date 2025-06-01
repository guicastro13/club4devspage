import { Provider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PG_CONNECTION_POOL } from './database.constants';

export const databaseProviders: Provider[] = [
  {
    provide: PG_CONNECTION_POOL,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const logger = new Logger('DatabaseProvider');
      const pool = new Pool({
        user: configService.get<string>('POSTGRES_USER'),
        host: configService.get<string>('POSTGRES_HOST'),
        database: configService.get<string>('POSTGRES_DB'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        idleTimeoutMillis: configService.get<number>(
          'POSTGRES_IDLE_TIMEOUT_MILLIS',
          30000,
        ),
        connectionTimeoutMillis: configService.get<number>(
          'POSTGRES_CONNECTION_TIMEOUT_MILLIS',
          2000,
        ),
      });

      try {
        const client = await pool.connect();
        logger.log('Pool de conexões com PostgreSQL conectado com sucesso.');
        client.release();
      } catch (err) {
        logger.error(
          'Falha ao conectar o pool de conexões com PostgreSQL:',
          err.stack,
        );
        throw err;
      }
      return pool;
    },
  },
];
