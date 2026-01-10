import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./shared/components/main/main";
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ECommerceWebSite');
}
