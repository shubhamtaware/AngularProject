import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-confectionary',
  templateUrl: './confectionary.component.html',
  styleUrls: ['./confectionary.component.css']
})
export class ConfectionaryComponent implements OnInit {

  confectionary: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((product)=>{
    this.confectionary=product;
    })
  }
}
