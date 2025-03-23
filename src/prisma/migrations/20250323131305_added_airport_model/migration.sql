/*
  Warnings:

  - A unique constraint covering the columns `[name,state,country]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "City_name_key";

-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_key" ON "Airport"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_address_key" ON "Airport"("address");

-- CreateIndex
CREATE UNIQUE INDEX "City_name_state_country_key" ON "City"("name", "state", "country");

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
