export interface QuestionField {
  id: string;
  question: string;
}

export interface QuestionSection {
  section: string;
  fields: QuestionField[];
}
