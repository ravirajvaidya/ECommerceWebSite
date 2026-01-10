import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ServiceCategory } from '../../shared/services/service-category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catagories-bar',
  imports: [CommonModule, RouterLink],

  templateUrl: './catagories-bar.html',
  styleUrl: './catagories-bar.css',
})

export class CatagoriesBar implements OnInit {

  // Define an Observable instead of a raw array
  categories$!: Observable<any[]>;

  constructor(private categoriesService: ServiceCategory) { }

  ngOnInit(): void {
    // Simply assign the observable; the template will handle the rest
    this.categories$ = this.categoriesService.GetAllCategories();
  }

  // categories: any = [
  //   {
  //     "category_name": "Mobiles",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869141/mobile-device_njvaym.png"
  //   },
  //   {
  //     "category_name": "Electronics",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/electronics_vyihs1.png"
  //   },
  //   {
  //     "category_name": "Fashion",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/fashion_garfiq.png"
  //   },
  //   {
  //     "category_name": "Home & Furniture",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869141/home-furniture_nsixhf.png"
  //   },
  //   {
  //     "category_name": "Appliances",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/appliances_zwx18v.png"
  //   },
  //   {
  //     "category_name": "Beauty & Personal Care",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/beauty-care_afmxxj.png"
  //   },
  //   {
  //     "category_name": "Grocery",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/grocery_twsxim.png"
  //   },
  //   {
  //     "category_name": "Sports & Fitness",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869141/sports-fitness_nvlpnr.png"
  //   },
  //   {
  //     "category_name": "Toys & Baby",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869142/toys-baby_jwrsqz.png"
  //   },
  //   {
  //     "category_name": "Books",
  //     "category_image_url": "https://res.cloudinary.com/drma7vy0p/image/upload/v1767869140/books_rkgziy.png"
  //   }
  // ]


}
