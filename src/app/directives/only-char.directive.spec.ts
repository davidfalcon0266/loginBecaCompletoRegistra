import { OnlyCharDirective } from './only-char.directive';
import { element } from 'protractor';
import { ElementRef } from '@angular/core';

describe('OnlyCharDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new OnlyCharDirective(el);
    expect(directive).toBeTruthy();
  });
});
