import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductStates } from './product.model';
import { MainMenuIcons } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productStates: ProductStates = {
    enabled: 'HABILITADO',
    disabled: 'OCULTO',
    visible: 'VISIBLE'
  };

  products: Product[] = [
    {
      name: '$200 X 3 Chocofan 37Gr',
      state: this.productStates.enabled,
      stock: true,
      price: 200,
      imgUrl: './assets/images/product1.png'
    },
    {
      name: 'Hamburguesa Doble + Gaseosa + Papas',
      state: this.productStates.visible,
      stock: false,
      price: 1200,
      imgUrl: './assets/images/product2.png'
    },
    {
      name: 'Capuccino Italiano Llevar Dp 14 Oz',
      state: this.productStates.disabled,
      stock: false,
      price: 500,
      imgUrl: './assets/images/product3.png'
    },
  ]

  menuIcons: MainMenuIcons[] = [
    {
      imgSrc: './assets/menu-icons/cart.png',
      name: 'Cart',
      selected: false,
    },
    {
      imgSrc: './assets/menu-icons/store.png',
      name: 'Store',
      selected: false,
    },
    {
      imgSrc: './assets/menu-icons/inbox.png',
      name: 'Inbox',
      selected: true,
    },
    {
      imgSrc: './assets/menu-icons/chart.png',
      name: 'Chart',
      selected: false,
    },
    {
      imgSrc: './assets/menu-icons/exit.png',
      name: 'Exit',
      selected: false,
    },
  ]
}



