import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductModalComponent } from "../../shared/product-modal/product-modal.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, HttpClientModule, ProductModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  modalVisible = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('assets/data/products.json').subscribe(data => {
      this.products = data;
    });
  }

  openModal(product: Product){
    this.selectedProduct = product;
    this.modalVisible = true;
  }

  closeModal(){
    this.modalVisible = false;
    this.selectedProduct = null;
  }
}
