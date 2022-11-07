import { Router } from "express";

class RouterEngine {
  private routers: Map<string, Router> = new Map<string, Router>();

  public registerRouter(route: string, router: Router) {
    this.routers.set(route, router);
  }

  public getRoutes() {
    return this.routers;
  }
}

export default RouterEngine;
