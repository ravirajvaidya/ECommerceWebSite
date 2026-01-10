import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-top-deals',
  imports: [CommonModule, RouterLink],
  templateUrl: './top-deals.html',
  styleUrl: './top-deals.css',
})
export class TopDeals {

  deals: any = [
    {
      "dealId": 1,
      "category":"Electronics",
      "name": "Bluetooth_Speaker",
      "price": 74999,
      "image": "DealsImg/Bluetooth_Speaker.png"
    },
    {
      "dealId": 2,
      "category": "Fashion",
      "name": "Cloths",
      "price": 79999,
      "image": "DealsImg/Cloths.png"
    },
    {
      "dealId": 3,
      "category": "HomeAndFurniture",
      "name": "Furniture",
      "price": 29999,
      "image": "DealsImg/Furniture.png"
    },
    {
      "dealId": 4,
      "category": "HomeAndFurniture",
      "name": "Home_Furniture.png",
      "price": 55999,
      "image": "DealsImg/home_furniture.png"
    },
    {
      "dealId": 5,
      "category": "Mobiles",
      "name": "Mobile",
      "price": 1999,
      "image": "DealsImg/mobile.png"
    },
    {
      "dealId": 6,
      "category": "Electronics",
      "name": "Projector",
      "price": 1999,
      "image": "DealsImg/Projector.png"
    },
    {
      "dealId": 7,
      "category": "SportsAndFitness",
      "name": "Sports",
      "price": 1999,
      "image": "DealsImg/Sports.png"
    }
  ]
}
