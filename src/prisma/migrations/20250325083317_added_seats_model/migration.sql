-- CreateEnum
CREATE TYPE "seatType" AS ENUM ('business', 'economy', 'first_class', 'premium_economy');

-- CreateTable
CREATE TABLE "Seats" (
    "id" SERIAL NOT NULL,
    "row" INTEGER NOT NULL,
    "coloumn" TEXT NOT NULL,
    "seatType" "seatType" NOT NULL DEFAULT 'economy',
    "airplaneModelNumber" INTEGER NOT NULL,

    CONSTRAINT "Seats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seats" ADD CONSTRAINT "Seats_airplaneModelNumber_fkey" FOREIGN KEY ("airplaneModelNumber") REFERENCES "Airplane"("modelNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
