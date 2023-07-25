import { Injectable } from '@nestjs/common';
import { User } from 'src/user/domain/model/User.model';
import { UserRepository } from 'src/user/domain/ports/user.repository';

@Injectable()
export class UserInMemory implements UserRepository {
  private readonly users: User[] = [];

  save(user: User): User {
    this.users.push(user);
    return user;
  }

  findOne(userId: string): User {
    return this.users.find((user) => user.id === userId);
  }

  findAll(): User[] {
    return this.users;
  }

  delete(userId: string) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users.splice(userIndex, 1);
  }

  update(userId: string, user: User): User {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users.splice(userIndex, 1, user);
    return user;
  }
}
