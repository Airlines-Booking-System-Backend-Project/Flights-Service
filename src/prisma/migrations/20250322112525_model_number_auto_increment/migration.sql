-- AlterTable
CREATE SEQUENCE airplane_modelnumber_seq;
ALTER TABLE "Airplane" ALTER COLUMN "modelNumber" SET DEFAULT nextval('airplane_modelnumber_seq');
ALTER SEQUENCE airplane_modelnumber_seq OWNED BY "Airplane"."modelNumber";
