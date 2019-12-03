import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
// import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


// Esto es lo que hacemos nosotros para de esta manera probar lo que son los resiltados

describe('calculadora', () => {
    let calculadora: CalculadoraComponent;
    let numero1: number;
    let numero2: number;

    beforeEach(() => {
       numero1 = 10;
       numero2 = 5;
       // tslint:disable-next-line: label-position

       calculadora = new CalculadoraComponent();

     });

    it('debe sumar dos resultados', () => {
       const resultado = calculadora.sumar(numero1, numero2);
       expect(resultado).toBe(15);
     });



    it('los resultados no deben ser mayor a 10', () => {
     const resultado = calculadora.sumar(7, 3);
     expect(resultado).toBeGreaterThan(9);
    });


    it('los resultados deben restar', () => {
      const resultado = calculadora.restar(7, 2);

      expect(resultado).toBe(5);
    });

    it('los resultados deben multimplicar', () => {
      const resultado = calculadora.multiplicar(7, 2);

      expect(resultado).toBeGreaterThan(8);
    });

    it('los resultados deben dividir', () => {
      const resultado = calculadora.dividir(7, 2);

      expect(resultado).toBe(3.5);
    });

});



describe('casa de cambio', () => {

    const error = 'no se encontro el libro';
    const libros: any = [
      {
        autor: 'david',
        titulo: 'el mejor programador',
        publicacion: '123',
        isbn: '9999'
      },
      {
        autor: 'daniel',
        titulo: 'el mejor diseñador',
        publicacion: '127',
        isbn: '8542'
      },
      {
        autor: 'darwing',
        titulo: 'el mejor de todos',
        publicacion: '856',
        isbn: '84562'
      },
      {
        autor: 'jose',
        titulo: 'el mejor peluquero',
        publicacion: '026',
        isbn: '12547'
      }
    ];

    let calculadora: CalculadoraComponent;
    let clp: number;
    let eur: number;
    let cantidad: number;
    beforeEach(() => {
      clp = 830;
      eur = 940;
      cantidad = 10;
      // tslint:disable-next-line: label-position

      calculadora = new CalculadoraComponent();

    });

    // valor USD
    it('valor del dolar', () => {
      // tslint:disable-next-line: no-shadowed-variable
      const clp = 41500;
      const resultado = calculadora.calcularUSD(clp);

      expect(resultado).toBe(50);
    });

    it('mayor a 100', () => {
      // tslint:disable-next-line: no-shadowed-variable
      const clp = 83830;
      const resultado = calculadora.calcularUSD(clp);

      expect(resultado).toBeLessThan(100);
    });


    // valor EUR
    it('valor del EUR', () => {
      // tslint:disable-next-line: no-shadowed-variable
      const clp = 45700;
      const resultado = calculadora.calcularEUR(clp);

      expect(resultado).toBe(50);
    });

    it('mayor a 100', () => {
      // tslint:disable-next-line: no-shadowed-variable
      const clp = 92000;
      const resultado = calculadora.calcularEUR(clp);

      expect(resultado).toBeLessThan(100);
    });


    it('retornar valores de libros', () => {

      const libro: any[] = [];
// tslint:disable-next-line: one-variable-per-declaration
      const resultados: any = calculadora.buscarLibros('9999');

      for (let i = 0; i < this.libros.length; i++) {
     const isbn = libros[i].isbn;
     console.log(isbn);
     }

      if (resultados === this.isbn) {
      libro.push(this.libros[resultados]);
      console.log(libro);
      return true;
       }
      return console.log(this.error);

      // expect().toBeLessThan(100);
  });


});



