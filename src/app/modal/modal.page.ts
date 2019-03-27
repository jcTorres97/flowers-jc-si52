import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ShopingCartService } from '../shoping-cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
  modalTitle:string;
  modelId:number;
  items = [];
  cart = [];
  categoria:any;

  constructor(
    private modalCtrl: ModalController, 
    private navParams: NavParams,
    private cartService: ShopingCartService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.items = this.cartService.getFlowers();
    console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle;
    this.modelId = this.navParams.data.paramID;
    this.categoria = this.navParams.data.categoria;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(this.cart);
  }

  async presentToast(product) {
    const toast = await this.toastController.create({
      message: 'Se añadio ' + this.categoria.category + " " + product.name + ' al carrito',
      color: "tertiary",
      duration: 2000,
      showCloseButton: true,
      animated:true
    });
    toast.present();
  }

  addToCart(product){
    this.cart.push(product);
  }
}
