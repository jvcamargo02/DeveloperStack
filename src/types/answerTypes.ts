export interface Answer {
    id: Number,
    answeredBy: string,
    answer: string,
    questionId: number
}

export type CreateAnswerData = Omit<Answer, "id">