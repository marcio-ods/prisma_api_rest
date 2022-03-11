import { Prisma } from '@prisma/client';
export const users: Prisma.UserCreateInput[] = [
  {
    email: 'test@test.com',
    name: 'Teste da Silva',
    password: 'Abc.123',
  },
];
