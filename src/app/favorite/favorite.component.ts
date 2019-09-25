import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //encapsulation: ViewEncapsulation.Emulated // css dosyasındaki stiller bu komponente göredir. başka komponent stilleri ile çakışmaz. her tarayıcıda çalışmaz
})
export class FavoriteComponent {
  // is-favorite alias. html sayfasından is-favorite yazarak erişim sağlanabilir. değişken ismi yerine alieas kullanır
  @Input('is-favorite') isFavorite: boolean; // input anatasyonu dışında bir yol daha var componente decorator inputs yapılabilir

  @Output('change') change = new EventEmitter();

  constructor() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
