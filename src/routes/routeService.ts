import { Application, Router } from "express";
import userRouter from "./../components/user/userRouter";
// import RouterEngine from "./Router";

class RouteService {
  private app: Application;
  // private router: RouterEngine;
  private routeList: Map<string, Router> = new Map<string, Router>();

  public constructor(app: Application) {
    this.app = app;
    // this.router = new RouterEngine();
    this.bindRouters();
  }

  private registerRouter(route: string, router: Router) {
    this.routeList.set(route, router);
  }

  public bindRouters() {
    this.registerRouter("/api/v1/user", userRouter);
  }

  public run() {
    this.routeList.forEach((router: Router, route: string) => {
      this.app.use(route, router);
    });
  }
}

export default RouteService;
