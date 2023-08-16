import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductStates } from 'src/app/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product | null = null;
  @Input() productStates: ProductStates | null = null;
}
