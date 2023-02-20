import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
class ProductsService {
  products: Product[];
}
