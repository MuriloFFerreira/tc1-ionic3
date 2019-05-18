import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OpcoesPage } from '../opcoes/opcoes';
import { ListaPage } from '../lista/lista';
import { EnvioPage } from '../envio/envio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OpcoesPage;
  tab3Root = ListaPage;
  tab4Root = EnvioPage;
  
  constructor() {

  }
}
