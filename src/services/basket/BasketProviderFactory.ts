import IBasket from "./contracts/IBasket";
import BasketMemoryProvider from "./providers/BasketMemoryProvider";
import BasketRedisProvider from "./providers/BasketRedisProvider";

class BasketProviderFactory {
  private providers: Map<string, IBasket> = new Map<string, IBasket>();
  constructor() {
    this.providers.set("momory", new BasketMemoryProvider());
    this.providers.set("redis", new BasketRedisProvider());
  }

  public registerProvider(name: string, provider: IBasket) {
    this.providers.set(name, provider);
  }

  public getProvider(name: string): IBasket {
    if (!this.hasProvider(name)) {
      throw new Error(`provider ${name} does not exist!`);
    }
    return this.providers.get(name) as IBasket;
  }

  private hasProvider(name: string): boolean {
    return this.providers.has(name);
  }
}
export default BasketProviderFactory;
