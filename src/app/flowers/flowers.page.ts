import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../shoping-cart.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.page.html',
  styleUrls: ['./flowers.page.scss'],
})
export class FlowersPage implements OnInit {

  cart = [];
  items = [];
  fl:string;

  sliderConfig = {
    spaceBetween:10,
    centeredSlides: true,
    slidesPerView:1.25
  }

  constructor(
    private cartService: ShopingCartService,
    private router: Router, 
    public modalCtrl: ModalController,
    public datos: DatosService
    ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cargarDatos();
  }

  cargarDatos(){
    this.datos.datosFlores().subscribe(datos=>{
      this.fl = JSON.stringify(datos);    
      this.items = JSON.parse(this.fl);
      console.log(this.items)     
      }
    );

  }

  openCart(){
    this.router.navigate(['shoping-cart'])
  }

  async openModal(cat)
  {
    const modalPage = await this.modalCtrl.create({
      component: ModalPage, 
      componentProps: {
        "categoria": cat,
      }
    });

    modalPage.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        dataReturned['data'].forEach(element => {
          this.cartService.addProduct(element);
        });       
        console.log('Modal Sent Data :', dataReturned['data']);
      }
    });

    return await modalPage.present();
  }
}