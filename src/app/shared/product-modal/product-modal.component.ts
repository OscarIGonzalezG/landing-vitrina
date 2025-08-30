import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  @Input() product!: Product | null; // Producto que recibe
  @Input() visible = false; // Controla visibilidad
  @Output() close = new EventEmitter<void>(); // Para cerrar modal

  animation = 'animate-popIn';

  // Método cerrar con animación
  onClose() {
    this.animation = 'animate-popOut'; // activa salida
    setTimeout(() => {
      this.close.emit(); // emite al padre
      this.animation = 'animate-popIn'; // reset para la próxima vez
    }, 350); // mismo tiempo que la animación popOut
  }

  closeOnOverlay(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.onClose(); // usa el mismo flujo animado
    }
  }

}
