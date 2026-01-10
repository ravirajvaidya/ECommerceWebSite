import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-product-details',
  imports: [],
  templateUrl: './page-product-details.html',
  styleUrl: './page-product-details.css',
})
export class PageProductDetails {
  path!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.path = this.route.snapshot.paramMap.get('id');
    console.log("PageProductDetails : " + this.route.snapshot.paramMap.get('id'));
  }
}
