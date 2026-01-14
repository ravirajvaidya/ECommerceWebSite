import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../Interfaces/IProducts';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ServiceProducts } from '../Services/service-products';

@Component({
  selector: 'app-page-product-details',
  imports: [CommonModule],
  templateUrl: './page-product-details.html',
  styleUrl: './page-product-details.css',
})
export class PageProductDetails {
  pId!: number;
  pSelectedImage!: string;

  images = [
    { src: '/Categories/appliances.png', alt: 'Image 1' },
    { src: '/Categories/books.png', alt: 'Image 2' },
    { src: '/Categories/grocery.png', alt: 'Image 3' }
  ]

  aProduct$!: Observable<IProducts | null>;

  constructor(private route: ActivatedRoute, private productServic: ServiceProducts) { }

  ngOnInit() {
    // Or with explicit null check to prevent NaN
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.pId = parseInt(idString, 10)
    }
    console.log("PageProductDetails : " + this.route.snapshot.paramMap.get('id'));

    this.aProduct$ = this.productServic.GetProductDetailsById(this.pId);

    this.aProduct$.subscribe((x: any) => {
      this.pSelectedImage = x?.product_images[0].image_url || "";
      console.log(JSON.stringify(x));
    })
  }

  UpdateSelectedImg(selectedImg: string): void {
    this.pSelectedImage = selectedImg;
  }
}
