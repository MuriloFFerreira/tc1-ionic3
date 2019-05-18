import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { ListaPage } from '../pages/lista/lista';
import { LoginPage } from '../pages/login/login';
import { CadTomadorPage } from '../pages/cad-tomador/cad-tomador';
import { CadMunicipioPage } from '../pages/cad-municipio/cad-municipio';
import { MeuDadosPage } from '../pages/meu-dados/meu-dados';
import { EmissaoPage } from '../pages/emissao/emissao';
import { ConsultaPage } from '../pages/consulta/consulta';
import { EnvioPage } from '../pages/envio/envio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    OpcoesPage,
    ListaPage,
    CadTomadorPage,
    CadMunicipioPage,
    MeuDadosPage,
    EmissaoPage,
    ConsultaPage,
    EnvioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    OpcoesPage,
    ListaPage,
    CadTomadorPage,
    CadMunicipioPage,
    MeuDadosPage,
    EmissaoPage,
    ConsultaPage,
    EnvioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
