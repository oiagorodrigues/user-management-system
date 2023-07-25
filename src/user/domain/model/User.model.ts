import { randomUUID } from 'crypto';

export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;

  constructor(name: string, email: string, phone: string, image: string) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.image = image;
  }
}
