import { User } from '../model/User.model';

export interface UserRepository {
  save(user: User): User;
  findOne(userId: string): User;
  findAll(): User[];
  delete(userId: string): void;
  update(userId: string, user: User): User;
}

export const UserRepository = Symbol('UserRepository');
