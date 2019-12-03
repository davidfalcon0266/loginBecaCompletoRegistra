import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyChar]'
})
export class OnlyCharDirective {

  private regex: RegExp = new RegExp(/^[a-zA-ZñÑ]+$/g);

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent, MouseEvent){      //nombre y lista de elementos

    //controlar ctrl (restringiendo)
    if (event.ctrlKey && MouseEvent) {
      return false;
    }

    //para controlar numeros
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}
