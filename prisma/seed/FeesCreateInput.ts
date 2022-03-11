import { Prisma } from '@prisma/client';
export const fees: Prisma.FeesCreateInput[] = [
  {
    name: 'Liquidação',
    value: '0,5',
    // BrokerageNote
    // description
  },
  {
    name: 'Emolumentos',
    value: '0,1',
    // BrokerageNote
    // description
  },
  {
    name: 'Registro',
    value: '0,1',
    // BrokerageNote
    // description
  },
];
