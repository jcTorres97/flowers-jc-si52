import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data:string = ""

  km = [];

  florerias = [] ;

  

  constructor(public geolocation:Geolocation, public datos:DatosService){}

  ngOnInit() {
    this.datos.cargarFlorerias();
  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {   
      this.data = "Lat: " + resp.coords.latitude + " Lng: " + resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  direccionCercana(){
    
    this.florerias = this.datos.florerias;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.florerias.forEach(element => {
        this.km.push(
          {
            distancia: this.calculateDistance(resp.coords.longitude, element.Longitud, resp.coords.latitude, element.Latitud),
            nombre: element.Nombre
          });
        this.km.sort((a, b) => a.distancia - b.distancia )
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis);
  }

}
