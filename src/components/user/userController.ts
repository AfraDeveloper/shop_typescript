import { Request, Response } from "express";
import User from "./models/User";

class UserController {
  constructor() {}

  public index(req: Request, res: Response) {
    res.send({ path: "index controller" });
  }

  async create(req: Request, res: Response) {
    const newUser = await User.create({
      first_name: "sahar",
      last_name: "ahamdi",
      mobile: "0916123456",
      email: "sahar@email.com",
    });
    res.send(newUser);
  }
}

export default UserController;
