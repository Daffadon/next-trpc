/*
  Warnings:

  - You are about to drop the column `url` on the `News` table. All the data in the column will be lost.
  - Added the required column `author` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "url",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL;
