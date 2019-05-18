import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadTomadorPage } from '../cad-tomador/cad-tomador';
import { CadMunicipioPage } from '../cad-municipio/cad-municipio';
import { MeuDadosPage } from '../meu-dados/meu-dados';
import { EmissaoPage } from '../emissao/emissao';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the OpcoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcoesPage');
  }
  ClickCadastroTomador(){
    this.navCtrl.push( CadTomadorPage )
  }
  ClickCadastroMunicipio(){
    this.navCtrl.push( CadMunicipioPage )
  }
  ClickMeusDados(){
    this.navCtrl.push( MeuDadosPage )
  }
  ClickEmissao(){
    this.navCtrl.push( EmissaoPage )
  }
  ClickConsulta() {
    this.navCtrl.push( ConsultaPage )
  }

}
