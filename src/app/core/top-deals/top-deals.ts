import { CommonModule, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { map, Observable } from 'rxjs';
import { ServiceProducts } from '../../products/Services/service-products';

@Component({
  selector: 'app-top-deals',
  imports: [CommonModule, RouterLink],
  templateUrl: './top-deals.html',
  styleUrl: './top-deals.css',
})
export class TopDeals implements OnInit {

  deals$!: Observable<any[]>;

  // deals: any = [
  //   {
  //     "dealId": 1,
  //     "category":"Electronics",
  //     "name": "Bluetooth_Speaker",
  //     "price": 74999,
  //     "image": "DealsImg/Bluetooth_Speaker.png"
  //   },
  //   {
  //     "dealId": 2,
  //     "category": "Fashion",
  //     "name": "Cloths",
  //     "price": 79999,
  //     "image": "DealsImg/Cloths.png"
  //   },
  //   {
  //     "dealId": 3,
  //     "category": "HomeAndFurniture",
  //     "name": "Furniture",
  //     "price": 29999,
  //     "image": "DealsImg/Furniture.png"
  //   },
  //   {
  //     "dealId": 4,
  //     "category": "HomeAndFurniture",
  //     "name": "Home_Furniture.png",
  //     "price": 55999,
  //     "image": "DealsImg/home_furniture.png"
  //   },
  //   {
  //     "dealId": 5,
  //     "category": "Mobiles",
  //     "name": "Mobile",
  //     "price": 1999,
  //     "image": "DealsImg/mobile.png"
  //   },
  //   {
  //     "dealId": 6,
  //     "category": "Electronics",
  //     "name": "Projector",
  //     "price": 1999,
  //     "image": "DealsImg/Projector.png"
  //   },
  //   {
  //     "dealId": 7,
  //     "category": "SportsAndFitness",
  //     "name": "Sports",
  //     "price": 1999,
  //     "image": "DealsImg/Sports.png"
  //   }
  // ]

  constructor(private prodService: ServiceProducts) { }
  ngOnInit(): void {
    let tempArray = this.prodService.GetAllProductsWithImages();

    this.deals$ = tempArray.pipe(
      map(data => {
        // Create a copy of the array to avoid mutating the original data source
        const copiedArray = [...data];
        const randomElements = [];
        const count = Math.min(5, copiedArray.length); // Ensure you don't ask for more elements than available

        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * copiedArray.length);
          // Add the random element to the result array
          randomElements.push(copiedArray[randomIndex]);
          // Remove the chosen element from the copy to prevent duplicates
          copiedArray.splice(randomIndex, 1);
        }
        return randomElements; // Return the new array with random elements
      })
    );
  }


}
