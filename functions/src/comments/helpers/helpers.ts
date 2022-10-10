import { ICreateCommentRequest, Comment  } from "../models/models";

export const createCommentRequest = (todo: ICreateCommentRequest): Comment => {
  return { ...todo, date: Date.now().toString()};
};