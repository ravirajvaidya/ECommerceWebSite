import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-products-listing',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './page-products-listing.html',
  styleUrl: './page-products-listing.css',
})
export class PageProductsListing {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const categoryName = this.route.snapshot.paramMap.get('categoryName');
    console.log("DATA RECEIVED categoryName : ", categoryName);
  }
}
