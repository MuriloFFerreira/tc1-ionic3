import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmissaoPage } from '../emissao/emissao';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  ClickEmitir() {
    this.navCtrl.push( EmissaoPage )
  }
}
