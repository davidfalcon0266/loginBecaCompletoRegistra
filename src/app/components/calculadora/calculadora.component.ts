import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

error: string = 'no se encontro el libro';

   libros = [
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

// valor1: number;
// valor2: number;

resultado: number;
  constructor() { }

  ngOnInit() {
    this.buscarLibros('12547');
  }
  sumar(valor1: number, valor2: number) {
  return this.resultado =  valor1 + valor2;
  }

  restar(valor1: number, valor2: number) {
  return this.resultado =  valor1 - valor2;
  }

  multiplicar(valor1: number, valor2: number) {
  return this.resultado =  valor1 * valor2;
  }

  dividir(valor1: number, valor2: number) {
  return this.resultado =  valor1 / valor2;
  }

  // calcular USD
  calcularUSD(clp) {
    const valorUSD = 830;
    const conversion = clp / valorUSD;
    if (conversion > 100) {
      const newValor = valorUSD + (830 * 0.1);
      const nuevaConversion = clp / newValor;
      console.log('Valor USD', conversion);
      console.log('Conversion USD ', nuevaConversion);
      return nuevaConversion;
    }
    return conversion;
  }

  // calcular euro
  calcularEUR(clp) {
    const valorEUR = 914;
    const conversion = clp / valorEUR;

    if (conversion > 100) {
      const newValor =  valorEUR + (914 * 0.1);
      const nuevaConversion = clp / newValor;
      console.log('Valor EUR', conversion);
      console.log('Conversion EUR ', nuevaConversion);
      return nuevaConversion;
    }
    return conversion;
  }


  buscarLibros(li: string) {
    const libro: any[] = [];

      // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.libros.length; i++) {
    const isbn = this.libros[i].isbn;
    console.log(isbn);
    if (li === isbn) {
   libro.push(this.libros[i]);
   console.log(libro);
    } else {
      console.log(this.error);
    }
       }
  }

}
