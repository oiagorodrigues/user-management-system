import { IsNotEmpty } from 'class-validator';

export class UserCommand {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  image: string;
}
