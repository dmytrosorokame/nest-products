import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    return this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
  }

  @Get(':id')
  getById(@Param('id') productId: string) {
    return this.productsService.getProductById(productId);
  }

  @Get()
  getAll() {
    return this.productsService.getProduts();
  }

  @Patch(':id')
  updateById(@Param('id') productId: string, @Body() body: any) {
    return this.productsService.updateProductById(productId, body);
  }

  @Delete(':id')
  deleteById(@Param('id') productId: string) {
    return this.productsService.deleteProductById(productId);
  }
}
