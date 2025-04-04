/**
 * RECTÁNGULO 
 * Considerando que un rectángulo varía de un cuadrado sólo 
 * porque la altura no es igual a la base, diseñe la clase 
 * Cl_rectangulo que herede de Cl_cuadrado, y luego haga un 
 * programa que determine el área y el perímetro de un rectángulo 
 * (área= base * altura, perímetro= 2*base + 2*altura).
 * 
 * Ejemplos de la corrida: 
 * Base del rectángulo: 4 
 * Altura: 2 
 * Área resultante: 8 
 * Perímetro: 12 
 * 
 * Base del rectángulo: 3 
 * Altura: 5 
 * Área resultante: 15 
 * Perímetro: 16 
 */

import Cl_rectangulo from "./Cl_rectangulo.js";
export default class Cl_main {
    constructor() {
        this.rect1 = new Cl_rectangulo(4,2);
        this.rect2 = new Cl_rectangulo(3,5);
        this.salida = document.getElementById("salida");
    }
    mostrarDatos(){
        this.salida.innerHTML =
        `<div>
        Base del rectángulo: ${this.rect1.base} <br>
        Altura: ${this.rect1.altura} <br>
        Área resultante: ${this.rect1.area()} <br>
        Perímetro: ${this.rect1.perimetro()}  <br>
        </div>
        <br>
        `;
    
        this.salida.innerHTML += 
        `<div>
        Base del rectángulo: ${this.rect2.base} <br>
        Altura: ${this.rect2.altura} <br>
        Área resultante: ${this.rect2.area()} <br>
        Perímetro: ${this.rect2.perimetro()}  <br>
        </div>
        <br>
        `; 
    }
}