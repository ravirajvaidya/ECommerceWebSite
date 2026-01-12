import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceProducts } from '../../shared/services/service-products';
import { Observable } from 'rxjs';
import { ServiceCategory } from '../../shared/services/service-category';

@Component({
  selector: 'app-page-products-listing',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './page-products-listing.html',
  styleUrl: './page-products-listing.css',
})
export class PageProductsListing implements OnInit {

  lstOfProducts$!: Observable<any[]>;

  selectedCategorie!: string;

  constructor(private route: ActivatedRoute,
    private productService: ServiceProducts, private catService: ServiceCategory) { }

  ngOnInit() {
    // const categoryParam = this.route.snapshot.paramMap.get('categoryName');
    // let categoryId!: number;
    // if (categoryParam) {
    //   categoryId = parseInt(categoryParam, 10);
    // }
    // console.log("DATA RECEIVED categoryName : ", categoryId);
    // this.lstOfProducts$ = this.productService.GetProductsAsPerCategories(categoryId);
    this.route.paramMap.subscribe(params => {
      const catId = Number(params.get('categoryName')); // ✅ REQUIRED
      console.log('Category ID from route =', catId);
      // this.selectedCategorie = this.catService.GetAllCategories();
      this.lstOfProducts$ = this.productService.GetProductsAsPerCategoriesWithImages(catId);
    });

  }
}
