import { movements } from './seed/MovementCreateInput';
import { fees } from './seed/FeesCreateInput';
import { markets } from './seed/MarketCreateInput';
import { labels } from './seed/LabelsCreateInput';
import { brokers } from './seed/BrokerCreateInput';
import { PrismaClient } from '@prisma/client';
import { users } from './seed/User';
import 'colors';
const prisma = new PrismaClient();

async function create<T, F>(create: F, args: T[]) {
  for (const data of args) {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await create({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data,
      });
    } catch (error) {
      console.log(error.message.yellow);
      continue;
    }
  }
}

async function main() {
  try {
    await create(prisma.user.create, users);
    await create(prisma.broker.create, brokers);
    await create(prisma.labels.create, labels);
    await create(prisma.movement.create, movements);
    // await create(prisma.fees.create, fees);
    await create(prisma.market.create, markets);
  } catch (error) {
    console.log(error.message.red);
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// async function createUser() {
//   for (const data of users) {
//     try {
//       await prisma.user.create({
//         data,
//       });
//     } catch (error) {
//       console.log(error.message.yellow);
//       continue;
//     }
//   }
// }

// async function createBroker() {
//   for (const data of brokers) {
//     try {
//       await prisma.broker.create({
//         data,
//       });
//     } catch (error) {
//       console.log(error.message.yellow);
//       continue;
//     }
//   }
// }

// async function createLabels() {
//   for (const data of labels) {
//     try {
//       await prisma.labels.create({
//         data,
//       });
//     } catch (error) {
//       console.log(error.message.yellow);
//       continue;
//     }
//   }
// }

// await createUser();
// await createBroker();
// await createLabels();
