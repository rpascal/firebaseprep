import { ENVIRONMENT } from './../../environments/environment.default';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  environment : any;

  constructor(public navCtrl: NavController) {
// debugger
    this.environment = ENVIRONMENT.environment;
   console.log(JSON.stringify(ENVIRONMENT))
  
  }

}
