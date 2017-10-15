import { Item } from './../../models/ItemModel';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { ENVIRONMENT } from './../../environments/environment.default';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  environment: any;

  items: Observable<Item[]>;
  test: Observable<Item[]>;

  constructor(public navCtrl: NavController, private firebase: FirebaseProvider) {
    this.environment = ENVIRONMENT.environment;
    console.log(JSON.stringify(ENVIRONMENT))

    this.items = this.firebase.getSnapshotBase<Item>("items").map(data => {
      data.forEach(item => {
        item.subCollection = this.firebase.getCollectionList(`items/${item.id}/subCollection`);
      });
      return data;

    })

  }

  public add() {
    const newItem: Item = { name: "Testing" };
    this.firebase.setItem("items", newItem);
  }






}
