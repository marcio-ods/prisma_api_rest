import { Prisma } from '@prisma/client';
export const markets: Prisma.MarketCreateInput[] = [
  {
    name: 'Vista',
    // NoteOperation,
    description: 'Compra a vista',
  },
  {
    name: 'FRA',
    // NoteOperation,
    description: 'Compra fracionada',
  },
  {
    name: 'TERMO',
    // NoteOperation,
    description: 'Não sei que porra é essa?',
  },
];
