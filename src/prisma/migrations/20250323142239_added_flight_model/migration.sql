-- DropIndex
DROP INDEX "Airport_address_key";

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "departureAirportCode" TEXT NOT NULL,
    "arrivalAirportCode" TEXT NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "boardingGate" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "airplaneModelNumber" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNumber_key" ON "Flight"("flightNumber");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_airplaneModelNumber_fkey" FOREIGN KEY ("airplaneModelNumber") REFERENCES "Airplane"("modelNumber") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureAirportCode_fkey" FOREIGN KEY ("departureAirportCode") REFERENCES "Airport"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalAirportCode_fkey" FOREIGN KEY ("arrivalAirportCode") REFERENCES "Airport"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
