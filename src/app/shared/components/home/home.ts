import { Component } from '@angular/core';
import { CatagoriesBar } from "../../../products/catagories-bar/catagories-bar";
import { CommonModule } from '@angular/common';
import { TopDeals } from '../../../core/top-deals/top-deals';


@Component({
  selector: 'app-home',
  imports: [CommonModule, CatagoriesBar, TopDeals],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
