import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  private findProduct(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('not found product');
    }

    return product;
  }

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

  getProductById(id: string) {
    return this.findProduct(id);
  }

  updateProductById(id: string, body: any) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, ...body } : product,
    );

    return this.findProduct(id);
  }

  deleteProductById(id: string) {
    const product = this.findProduct(id);

    this.products = this.products.filter((product) => product.id !== id);

    return product;
  }
}
