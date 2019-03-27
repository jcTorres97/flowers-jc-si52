import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService implements OnInit{

  public distancias = [
    { nombre: 'Casa', lat: 21.156904, lon: -86.865236 },
    { nombre: 'Edificio H', lat: 21.050212, lon: -86.845564},
    { nombre: 'Biblioteca Tec', lat: 21.139377, lon: -86.834548 },
  ];

  f:string;
  florerias = [];

  fl:string;
  florecitas = [];

  constructor(public peticionHttp:HttpClient) { }

  ngOnInit() {    
  }

  cargarFlorerias(){
    this.datosFlorerias().subscribe(datos=>{
      this.f = JSON.stringify(datos);
      this.florerias = JSON.parse(this.f);            
      }
    );
    return this.florerias;
  }

  jalarflores(){
    this.datosFlores().subscribe(datos=>{
      this.fl = JSON.stringify(datos);    
      this.florecitas = JSON.parse(this.fl);
      console.log(this.florecitas)     
      }
    );
    return this.florecitas;
  }

  datosFlorerias(){
    return this.peticionHttp.get('https://floreria-2fd3d.firebaseio.com/florerias.json');
  }

  datosFlores(){
    return this.peticionHttp.get('https://floreria-2fd3d.firebaseio.com/flores.json');
  }
}
