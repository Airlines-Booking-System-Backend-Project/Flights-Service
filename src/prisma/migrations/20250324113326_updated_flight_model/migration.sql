/*
  Warnings:

  - Added the required column `arrivalTime` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_arrivalAirportCode_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_departureAirportCode_fkey";

-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "arrivalTime" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureAirportCode_fkey" FOREIGN KEY ("departureAirportCode") REFERENCES "Airport"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalAirportCode_fkey" FOREIGN KEY ("arrivalAirportCode") REFERENCES "Airport"("code") ON DELETE CASCADE ON UPDATE CASCADE;
