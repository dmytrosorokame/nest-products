import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(
    title: string,
    description: string,
    price: number,
  ): { id: string } {
    const prodId = String(this.products.length + 1);
    const newProduct = new Product(prodId, title, description, price);

    this.products.push(newProduct);

    return { id: prodId };
  }

  getProduts() {
    return [...this.products];
  }
}
