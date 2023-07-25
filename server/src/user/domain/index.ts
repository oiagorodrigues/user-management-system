import { Provider } from '@nestjs/common';
import { UserRepository } from './ports/user.repository';
import { UserInMemory } from '../adapters/db/user-in-memory.repository';
import { UserService } from './ports/user.service';

export const UserServices: Provider[] = [
  {
    provide: UserRepository,
    useClass: UserInMemory,
  },
  UserService,
];
