import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catagories-bar',
  imports: [CommonModule],
  templateUrl: './catagories-bar.html',
  styleUrl: './catagories-bar.css',
})
export class CatagoriesBar {

  Categories: any = [
    {
      "categoryName": "Mobiles",
      "iconName": "Categories/mobile-device.png"
    },
    {
      "categoryName": "Electronics",
      "iconName": "Categories/electronics.png"
    },
    {
      "categoryName": "Fashion",
      "iconName": "Categories/fashion.png"
    },
    {
      "categoryName": "Home & Furniture",
      "iconName": "Categories/home-furniture.png"
    },
    {
      "categoryName": "Appliances",
      "iconName": "Categories/appliances.png"
    },
    {
      "categoryName": "Beauty & Personal Care",
      "iconName": "Categories/beauty-care.png"
    },
    {
      "categoryName": "Grocery",
      "iconName": "Categories/grocery.png"
    },
    {
      "categoryName": "Sports & Fitness",
      "iconName": "Categories/sports-fitness.png"
    },
    {
      "categoryName": "Toys & Baby",
      "iconName": "Categories/toys-baby.png"
    },
    {
      "categoryName": "Books",
      "iconName": "Categories/books.png"
    }
  ]
}
