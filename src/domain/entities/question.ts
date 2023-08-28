import { randomUUID } from "node:crypto";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
}

export class Question {
  private id: string;
  private content: string;
  private title: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
    this.id = id ?? randomUUID();
  }
}
