import {Component, OnInit, ViewChild} from '@angular/core';
import {CekilisBaslaComponent} from "../cekilis-basla/cekilis-basla.component";

@Component({
  selector: 'app-cekilis',
  templateUrl: './cekilis.component.html',
  styleUrls: ['./cekilis.component.css']
})
export class CekilisComponent implements OnInit {

  // @ts-ignore
  @ViewChild(CekilisBaslaComponent) child; // Child componenti bir nevi parent componente enject ediyoruz
  date: string = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit() {
  }

}
