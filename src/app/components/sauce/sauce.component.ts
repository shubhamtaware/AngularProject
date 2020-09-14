import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrls: ['./sauce.component.css']
})
export class SauceComponent implements OnInit {

  sauce: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((product)=>{
    this.sauce=product;
    })
  }
}
