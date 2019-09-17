import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  product = {
    id: 100000,
    title: 'product title',
    author: 'Joe King',
    description: 'product description'
  };

  gotoDetails(productId: any) {
    this.router.navigate(['/product/', productId]);
  }

}
