import { Application } from "express";
import userRouter from "./functionAno"

export default (app: Application) => {
  const pathUrl = '/api/v1'; 
  app.use(`${pathUrl}/user`, userRouter);

 
};
