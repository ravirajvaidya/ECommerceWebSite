import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategories } from '../Interfaces/ICategories';
import { ServiceProducts } from '../Services/service-products';
import { ServiceCategory } from '../Services/service-category';

@Component({
  selector: 'app-page-products-listing',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './page-products-listing.html',
  styleUrl: './page-products-listing.css',
})
export class PageProductsListing implements OnInit {

  lstOfProducts$!: Observable<any[]>;

  lstOfCategories$!: Observable<ICategories[]>;

  selectedCategorie!: string;

  constructor(private route: ActivatedRoute,
    private productService: ServiceProducts, private catService: ServiceCategory) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const catId = Number(params.get('categoryName')); // ✅ REQUIRED
      console.log('Category ID from route =', catId);

      this.lstOfCategories$ = this.catService.GetAllCategories();

      this.catService.GetCategorieName(catId).subscribe((x: any) => {
        this.selectedCategorie = x;
      });

      this.lstOfProducts$ = this.productService.GetProductsAsPerCategoriesWithImages(catId);
    });

  }
}
