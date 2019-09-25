import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // is-favorite alias. html sayfasından is-favorite yazarak erişim sağlanabilir. değişken ismi yerine alieas kullanır
  @Input('is-favorite') isFavorite: boolean; // input anatasyonu dışında bir yol daha var componente decorator inputs yapılabilir

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
