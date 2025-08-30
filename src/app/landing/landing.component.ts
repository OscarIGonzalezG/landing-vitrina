import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ProductsComponent } from '../components/products/products.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactComponent } from "../components/contact/contact.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing',
  imports: [CommonModule, NavbarComponent, HeroComponent, ProductsComponent, FooterComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
