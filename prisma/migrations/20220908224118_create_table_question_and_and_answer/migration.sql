-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "askedBy" VARCHAR(50) NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "answeredBy" VARCHAR(50) NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
