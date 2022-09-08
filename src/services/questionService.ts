import * as questionRepository from "../repositories/questionRepository"
import { CreateQuestionData } from "../types/questionTypes"
// TODO
export async function createQuestion(createQuestionData: CreateQuestionData) {
  return await questionRepository.insert(createQuestionData)
} 

export async function getAll() {
    return await questionRepository.findAll()
}

export async function getById(id:number) {
    return await questionRepository.getById(id)    
}