import { config } from "dotenv";
import IProduct from "src/components/product/models/IProduct";
import IBasket from "../contracts/IBasket";
import IBasketConfigurable from "../contracts/IBasketConfigurable";
import redidConnection from "./../../../../infrastructure/connections/redis";
class BasketRedisProvider implements IBasket, IBasketConfigurable {
  private key: string = "";
  config(config: string) {
    this.key = config;
  }
  private basketItems: IProduct[] = [];

  public add(product: IProduct): void {
    redidConnection
      .get(this.key)
      .then((result) => {
        if (result) {
          const items = JSON.parse(result as string);
          items.push(product);
          redidConnection
            .set(key, JSON.stringify(items))
            .then((resutl) => {})
            .catch((error) =>
              console.log(`redis can not set basket item:${error.message}`)
            );
        }
      })
      .catch((error) =>
        console.log(`redis can not fetch basket item:${error.message}`)
      );
  }
  public remove(product: IProduct): void {
    redidConnection
      .get(this.key)
      .then((result) => {
        if (result) {
          const items = JSON.parse(result as string);
          items.splice(items.indexOf(product), 1);
          redidConnection
            .set(key, JSON.stringify(items))
            .then((resutl) => {})
            .catch((error) =>
              console.log(`redis can not set basket item:${error.message}`)
            );
        }
      })
      .catch((error) =>
        console.log(`redis can not fetch basket item:${error.message}`)
      );
  }
  public async items(): Promise<IProduct[]> {
    const items = await this.getItems();
    return items;
  }
  public async count(): Promise<number> {
    const items = await this.getItems();
    return items.length;
  }
  public async total(): Promise<number> {
    const items = await this.getItems();
    return items.reduce((total: number, product: IProduct) => {
      return total + product.price;
    }, 0);
  }

  public clear(): void {
    redidConnection.del(this.key);
  }
  public async has(product: IProduct): Promise<boolean> {
    const items = await this.getItems();
    return items.includes(product);
  }

  private async getItems(): Promise<IProduct[]> {
    const items = await redidConnection.get(this.key);
    //   .then((result) => result)
    //   .catch((error) => false);
    if (items) {
      const decodedItems = JSON.parse(items as string);
      return decodedItems;
    }

    return [];
  }
}

export default BasketRedisProvider;
