import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { usuario, libro } from './user.interface';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nombre = '';
  public apellido = '';
  public genero = '';
  public cedula: number = 0;
  public date = new Date;

  public nombreLibro = '';
  public generoLiterario = '';
  public anoCreacion = new Date;
  public escritor = "";

  public ArregloUsuario: Array<usuario> = [];
  public ArregloLibros: Array<libro> = [];

  public numero = 1;

  public register(): void {

    const Objetousuarios: usuario = {

      nombre: this.nombre,
      apellido: this.apellido,
      genero: this.genero,
      cedula: this.cedula,
      indice: this.numero,
      fecha: new Date,

    }

    this.ArregloUsuario.push(Objetousuarios);
    console.log(this.ArregloUsuario)
    alert("Usuario agregado exitosamente");
    this.numero++;
  }

  public registerLibro(): void {

    const Objetolibro: libro = {
      nombreLibro: this.nombreLibro,
      generoLiterario: this.generoLiterario,
      anoCreacion: new Date,
      escritor: this.escritor,
    }

    this.ArregloLibros.push(Objetolibro);
    console.log(this.ArregloLibros)
    alert("Libro agregado exitosamente");

  }

  public detalles() {
    for (var indice of this.ArregloUsuario) {
      alert(indice.indice);
    }
  }


}






