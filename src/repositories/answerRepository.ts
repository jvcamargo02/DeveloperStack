import { prisma } from "../config/database";
import { CreateAnswerData } from "../types/answerTypes";

// TODO
export async function insert(createAnswer: CreateAnswerData) {
    const { questionId, answer, answeredBy } = createAnswer;
    await prisma.answer.create({
        data: {
            answer,
            answeredBy,
            questionId,
        },
    });
}
