import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from 'src/user/domain/ports/user.service';
import { UserCommand } from './user.command';
import { User } from 'src/user/domain/model/User.model';

@Controller({
  path: 'users',
  version: ['1'],
})
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  save(@Body() userCommand: UserCommand): User {
    const { name, email, phone, image } = userCommand;
    const createdUser = this.userService.save(name, email, phone, image);
    return createdUser;
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): User {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.userService.delete(id);
  }
}
