import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';
import { PaginaActionSheetPage } from '../pagina-action-sheet/pagina-action-sheet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goPagina2():void{
    this.navCtrl.push(Pagina2Page);  
  }

  navegarActionSheet(){
    this.navCtrl.push(PaginaActionSheetPage);
  }

}
