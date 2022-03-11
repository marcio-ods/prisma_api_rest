import { Prisma } from '@prisma/client';
export const brokers: Prisma.BrokerCreateInput[] = [
  {
    name: 'Inter',
    user_tb: {
      connect: {
        email: 'test@test.com',
      },
    },
    site: 'https://internetbanking.bancointer.com.br/',
    CNPJ: '18.945.670/0001-46',
    contact: `
    Av. Barbacena, 1219 - Santo Agostinho
    Tel. (55 31) 800940-9999 Fax: (55 31) 800940-9999
    Internet: www.bancointer.com.br
    Ouvidoria: Tel. (55 31) 800940-9999
    C.N.P.J.: 18.945.670/0001-46
    `,
    // Movement
  },
  {
    name: 'Nu',
    user_tb: {
      connect: {
        email: 'test@test.com',
      },
    },
    site: 'https://internetbanking.nu.com.br/',
    CNPJ: '18.945.670/0001-46',
    contact: `
    Av. Barbacena, 1219 - Santo Agostinho
    Tel. (55 31) 800940-9999 Fax: (55 31) 800940-9999
    Internet: www.bancointer.com.br
    Ouvidoria: Tel. (55 31) 800940-9999
    C.N.P.J.: 18.945.670/0001-46
    `,
    // Movement
  },
];
