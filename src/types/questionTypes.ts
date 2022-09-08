export interface Question {
    id: number,
    askedBy: string,
    question: string
}

export type CreateQuestionData = Omit<Question, "id">