import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const consumos = await prisma.consumption.create({
    data: {
      nameClient: "Noemi Lucero",
      codUniqueElectric: 123456,
      meterNumber: 1234.56,
      typeConsumption: "Residential",
      startDate: new Date("2024-06-23"),
      endDate: new Date("2024-07-23"),
      description: "Monthly electricity consumption",
      previousReading: 1000.0,
      currentReading: 1200.0,
      contractAccount: 98765,
      billedDays: 31,
      consumptionTotal: 200,
      total: 30.60
    }
  });

  console.log(consumos);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
