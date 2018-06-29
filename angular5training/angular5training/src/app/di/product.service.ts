import {Injectable} from '@angular/core';
import {Product} from './product'


@Injectable()
export class ProductService {
  //Service
  getProduct() : Product {
     return new Product(101,
         "iPhone 8", 1249.99, "The latest iPhone, 9-inch screen");
  }
}