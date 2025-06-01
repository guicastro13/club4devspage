import { Injectable, Inject, OnModuleInit, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import { PG_CONNECTION_POOL } from '../database/database.constants';
import { SubscribeDto } from './dto/subscribe.dto';

export interface EmailRow {
  id: number;
  email: string;
  created_at: Date;
}

@Injectable()
export class SubscribersService implements OnModuleInit {
  private readonly logger = new Logger(SubscribersService.name);

  constructor(@Inject(PG_CONNECTION_POOL) private readonly pool: Pool) {}

  async onModuleInit() {
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS emails (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `);
      this.logger.log("Tabela 'emails' verificada/criada com sucesso.");
    } catch (err) {
      this.logger.error('Erro ao inicializar o banco de dados:', err.stack);
      throw err;
    }
  }

  async subscribe(
    subscribeDto: SubscribeDto,
  ): Promise<{ message: string; existing: boolean }> {
    const { email } = subscribeDto;
    try {
      const result: QueryResult<EmailRow> = await this.pool.query(
        'INSERT INTO emails (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
        [email],
      );

      if (result.rowCount === 0) {
        return {
          message: 'Este e-mail já estava na nossa lista. Tudo pronto!',
          existing: true,
        };
      }

      this.logger.log(`E-mail salvo: ${email}`);
      return {
        message: 'Perfeito! Você será notificado no lançamento. Obrigado!',
        existing: false,
      };
    } catch (error) {
      this.logger.error(
        `Erro ao salvar e-mail ${email} no banco de dados:`,
        error.stack,
      );
      throw error;
    }
  }

  async findAll(): Promise<EmailRow[]> {
    try {
      const { rows } = await this.pool.query<EmailRow>(
        'SELECT id, email, created_at FROM emails ORDER BY created_at DESC',
      );
      return rows;
    } catch (error) {
      this.logger.error('Erro ao buscar a lista de e-mails:', error.stack);
      throw error;
    }
  }
}
