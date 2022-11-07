import IProduct from "src/components/product/models/IProduct";

export default interface IBasket {
  add(product: IProduct): void;
  remove(product: IProduct): void;
  items(): Promise<IProduct[]>;
  count(): Promise<number>;
  total(): Promise<number>;
  clear(): void;
  has(product: IProduct): Promise<boolean>;
}
