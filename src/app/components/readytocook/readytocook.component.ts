import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-readytocook',
  templateUrl: './readytocook.component.html',
  styleUrls: ['./readytocook.component.css']
})
export class ReadytocookComponent implements OnInit {

  readytocook: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((product)=>{
    this.readytocook=product;
    })
  }
}
