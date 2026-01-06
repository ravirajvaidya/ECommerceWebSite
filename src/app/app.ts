import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBar } from "./header-bar/header-bar";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ECommerceWebSite');
}
