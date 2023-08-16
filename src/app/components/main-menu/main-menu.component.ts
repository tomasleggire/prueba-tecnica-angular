import { Component, Input } from '@angular/core';
import { MainMenuIcons } from 'src/app/product.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() menuIcons: MainMenuIcons[] | null = null;

  changeSelected = (index: number) => {
    if (this.menuIcons) {
      for (let i = 0; i < this.menuIcons.length; i++) {
        this.menuIcons[i].selected = i === index;
      }
    }
  }


}
