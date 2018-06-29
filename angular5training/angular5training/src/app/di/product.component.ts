import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './Product';


@Component({
   selector: 'app-DI',
   providers : [ProductService],
   templateUrl : './product.component.html'
})
export class ProductComponent {

     product : Product;
     constructor(public ps : ProductService){
         this.product = ps.getProduct();
     }

}