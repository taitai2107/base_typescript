import { Application } from "express";
import userRouter from "./functionAno"

export default (app:Application)=>{
const pathUrl = process.env.PATH_URL || '/api/v1/user'; 
  app.use(pathUrl, userRouter);
}