import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  quetzales: number = 0;
  dolares: number | null = null;

  constructor() {}

  convertir() {
    // Tasa de cambio: 8 quetzales = 1 dolar
    this.dolares = this.quetzales / 8;
    this.dolares = Math.round(this.dolares * 100) / 100; // Redondear a 2 decimales
  }

}
