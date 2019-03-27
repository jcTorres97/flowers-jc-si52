import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.page.html',
  styleUrls: ['./shoping-cart.page.scss'],
})
export class ShopingCartPage implements OnInit {

  selectedItems = [];
  items: any;
  selected: {};
  total = 0;
  muestra: boolean = true;
 
  constructor(private cartService: ShopingCartService) { }
 
  ngOnInit() {
    this.items = this.cartService.getCart();
    this.selected = {};

    this.obtenerCarrito();
  }

  obtenerCarrito(){
    
    for (let obj of this.items) {
      if (this.selected[obj.id]) {
        this.selected[obj.id].count++;
        console.log(this.selected)
      } else {
        this.selected[obj.id] = {...obj, count: 1};
        console.log(this.selected)
      }
    }
    this.precio();
  }

  precio(){
    this.selectedItems = Object.keys(this.selected).map(key => this.selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  agregar(item){
    this.cartService.addProduct(item);

    this.selected[item.id].count++;

    this.mostrar(this.selected[item.id].count, item)

    this.precio();
  }

  quitar(item){
    this.cartService.deleteProduct(item.id);
    
    this.selected[item.id].count--;

    this.mostrar(this.selected[item.id].count, item)

    this.precio();
  }

  mostrar(number, item){
    if(number>0){
      this.selected[item.id].show = true;
    } else {
      this.selected[item.id].show = false;
    }
  }

}
