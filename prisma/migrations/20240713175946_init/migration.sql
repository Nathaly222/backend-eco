-- CreateTable
CREATE TABLE "Consumption" (
    "id" SERIAL NOT NULL,
    "nameClient" TEXT NOT NULL,
    "codUniqueElectric" INTEGER NOT NULL,
    "meterNumber" DOUBLE PRECISION NOT NULL,
    "typeConsumption" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "previousReading" DOUBLE PRECISION NOT NULL,
    "currentReading" DOUBLE PRECISION NOT NULL,
    "contractAccount" INTEGER NOT NULL,
    "billedDays" INTEGER NOT NULL,
    "consumptionTotal" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Consumption_pkey" PRIMARY KEY ("id")
);
