import { CreateAnswerData } from "../types/answerTypes";
import * as answerRepository from "../repositories/answerRepository"

// TODO
export async function createAnswer(createAnswerData:CreateAnswerData) {
    return await answerRepository.insert(createAnswerData)
}