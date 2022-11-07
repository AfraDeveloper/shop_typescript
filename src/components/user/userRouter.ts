import { Router } from "express";
import UserController from "./userController";
const userControllerInstance = new UserController();
const userRouter: Router = Router();

userRouter.get("/", userControllerInstance.index);
userRouter.post("/", userControllerInstance.create);

export default userRouter;
