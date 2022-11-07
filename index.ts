import express from "express";
import { Application, Request, Response } from "express";

class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.router();
  }

  public router() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send({ success: true });
    });
  }
  public run() {
    this.app.listen(7000, () => console.log("app is running!"));
  }
}

const app = new App();
app.run();
