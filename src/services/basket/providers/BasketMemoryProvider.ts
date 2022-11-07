import IProduct from "src/components/product/models/IProduct";
import IBasket from "../contracts/IBasket";

class BasketMemoryProvider implements IBasket {
  private basketItems: IProduct[] = [];
  public add(product: IProduct): void {
    this.basketItems.push(product);
  }
  public remove(product: IProduct): void {
    // this.basketItems.filter(item=>item._id!==product._id)
    this.has(product).then((value) => {
      if (value) {
        this.basketItems.splice(this.basketItems.indexOf(product), 1);
      }
    });
  }
  public items(): Promise<IProduct[]> {
    return Promise.resolve(this.basketItems);
  }
  public count(): Promise<number> {
    return Promise.resolve(this.basketItems.length);
  }
  public total(): Promise<number> {
    const total = this.basketItems.reduce((total, product: IProduct) => {
      return total + product.price;
    }, 0);
    return Promise.resolve(total);
  }
  clear(): void {
    this.basketItems = [];
  }

  public has(product: IProduct): Promise<boolean> {
    return Promise.resolve(this.basketItems.includes(product));
  }
}

export default BasketMemoryProvider;
