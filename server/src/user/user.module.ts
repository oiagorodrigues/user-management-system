import { Module } from '@nestjs/common';
import { UserController } from './adapters/api/user.controller';
import { UserServices } from './domain';

@Module({
  controllers: [UserController],
  providers: [...UserServices],
})
export class UserModule {}
