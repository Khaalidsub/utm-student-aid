import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      email: 'khaalidsubaan@gmail.com',
      password: '123456',
    },
  ];

  async findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
