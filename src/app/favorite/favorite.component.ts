import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // is-favorite alias. html sayfasından is-favorite yazarak erişim sağlanabilir. değişken ismi yerine alieas kullanır
  @Input('is-favorite') isFavorite: boolean; // input anatasyonu dışında bir yol daha var componente decorator inputs yapılabilir

  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
