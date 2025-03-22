/*
  Warnings:

  - The primary key for the `Airplane` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `modelName` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `modelNumber` on the `Airplane` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Airplane" DROP CONSTRAINT "Airplane_pkey",
ADD COLUMN     "modelName" TEXT NOT NULL,
DROP COLUMN "modelNumber",
ADD COLUMN     "modelNumber" INTEGER NOT NULL,
ALTER COLUMN "capacity" SET DEFAULT 0,
ADD CONSTRAINT "Airplane_pkey" PRIMARY KEY ("modelNumber");
