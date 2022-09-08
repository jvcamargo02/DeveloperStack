import { Request, Response } from "express";
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
    // TODO
    const { askedBy, question } = req.body as {
        askedBy: string;
        question: string;
    };
    const questionData = { askedBy, question };
  await questionService.createQuestion(questionData);
  
  res.sendStatus(201)
} 

export async function createAnswer(req: Request, res: Response) {
    // TODO
  const { answeredBy, answer } = req.body as {
        answeredBy: string;
        answer: string;
  };
  const questionId = +req.params.id

  const answerData = { answeredBy, answer, questionId }
  
  await answerService.createAnswer(answerData)

  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.getAll()
  
  return res.status(200).send(questions)
}

export async function getById(req: Request, res: Response) {
    // TODO
  const id: number = +req.params.id
  const questionData = await questionService.getById(id)

  res.status(200).send(questionData)
}
