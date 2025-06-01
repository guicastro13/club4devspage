import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeDto {
  @IsEmail({}, { message: 'Formato de e-mail inválido. Verifique por favor.' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  @IsString()
  email: string;
}
