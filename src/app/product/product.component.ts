import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
PriceMax!:number;
listProduct:Product[]=[
{id:1,title:"iphone12",price:1000,quantity:100,like:0},
{id:2,title:"iphone13",price:1550,quantity:645,like:0},
{id:3,title:"iphone14",price:19900,quantity:50,like:0},
]
ngOnInit(){console.log("PriceMax")}
increment(p:number){

  this.listProduct[p].like++
}
buy(p:number){

  this.listProduct[p].quantity --

}
}
