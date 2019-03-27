import { Injectable, OnInit } from '@angular/core';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService implements OnInit {

  private flores = [];
  private flowers = [
    {
      category: 'Rosas',
      expanded: true,
      image: '/assets/Flores/rosas.png',
      products: [
        { id: 0, name: 'Rosa', price: '8' },
        { id: 1, name: 'Blanca', price: '12' },
        { id: 2, name: 'Azul', price: '10' },
        { id: 3, name: 'Amarilla', price: '10' }
      ]
    },
    {
      category: 'Claveles',
      image: '/assets/Flores/claveles.png',
      products: [
        { id: 0, name: 'Rosa', price: '8' },
        { id: 1, name: 'Blanca', price: '12' },
        { id: 2, name: 'Azul', price: '10' },
        { id: 3, name: 'Amarilla', price: '10' }
      ]
    },
    {
      category: 'Orquideas',
      image: '/assets/Flores/orquidea.png',
      products: [
        { id: 0, name: 'Rosa', price: '8' },
        { id: 1, name: 'Blanca', price: '12' },
        { id: 2, name: 'Azul', price: '10' },
        { id: 3, name: 'Amarilla', price: '10' }
      ]
    },
    {
      category: 'Crisantemos',
      image: '/assets/Flores/crisantemos.png',
      products: [
        { id: 0, name: 'Rosa', price: '8' },
        { id: 1, name: 'Blanca', price: '12' },
        { id: 2, name: 'Azul', price: '10' },
        { id: 3, name: 'Amarilla', price: '10' }
      ]
    },
    {
      category: 'Otros',
      image: '/assets/Flores/girasol.png',
      products: [
        { id: 0, name: 'Girasol', price: '8' },
        { id: 1, name: 'Hortensia', price: '12' },
        { id: 2, name: 'Lirio', price: '10' },
        { id: 3, name: 'Tulipan', price: '10' }
      ]
    },
  ];

  private cart = [];

  constructor(public datos:DatosService) { }

  ngOnInit() {
    this.datos.jalarflores();
  }

  getFlowers(){    
    this.flores = this.datos.florecitas;
    return this.flores;     
  }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }
  
  deleteProduct(id) {
    console.log(this.cart);
    console.log(id);
    this.cart.splice(id, 1);
  }

}
