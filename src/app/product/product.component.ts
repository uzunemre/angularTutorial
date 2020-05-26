import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "./product";

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products;
  addedProduct: Product;

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(response => this.products = response);
  }

  addToCard(product: Product) {
    console.log(product);
    this.addedProduct = product;
  }

}
