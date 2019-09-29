import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {


  // html sayfasından <input type="text" [appInputFormat]="'uppercase'"> bu şekilde çağırabiliriz directivede bir parametre varsa
  // <input type="text" appInputFormat [format]="'uppercase'"  > bu şekilde de kullanabiliriz birden fazla parametre verebiliriz her parametre için inputlar kullanabiliriz.
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) {

  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format == 'lovercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
