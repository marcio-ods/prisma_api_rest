import { Prisma } from '@prisma/client';
export const labels: Prisma.LabelsCreateInput[] = [
  {
    key: 'ação',
    labels: `OIBR3,;VALE3`,
  },
  {
    key: 'mercado',
    labels: `Vista,;FRA,;TERMO`,
  },
  {
    key: 'taxas',
    labels: `Liquidação,;Emolumentos,;Registro`,
  },
];
