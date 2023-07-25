import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '../model/User.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  save(name: string, email: string, phone: string, image: string): User {
    const user = new User(name, email, phone, image);
    this.userRepository.save(user);
    return user;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(userId: string) {
    console.log({ userId });
    return this.userRepository.findOne(userId);
  }

  delete(userId: string) {
    return this.userRepository.delete(userId);
  }

  update(userId: string, user: User) {
    this.userRepository.update(userId, user);
    return user;
  }
}
