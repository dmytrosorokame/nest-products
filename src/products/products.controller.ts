import { ProductsService } from './products.service';
import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    return this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
  }

  @Get()
  getAll() {
    return this.productsService.getProduts();
  }
}
