import { prisma } from "../config/database";
import { CreateQuestionData, Question } from "../types/questionTypes";

// TODO
export async function insert(createQuestionData: CreateQuestionData) {
    await prisma.question.create({
        data: createQuestionData,
    });
}

export async function findAll(){
    return prisma.question.findMany()
}

export async function getById(id: number) {
    return await prisma.question.findUnique({
        where: { 
            id
        },
        select: {
            question: true,
            answer: {
                select: {
                    answer: true,
                    answeredBy: true
                }
            }
        }
    })
}