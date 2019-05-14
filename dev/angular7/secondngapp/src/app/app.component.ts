import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*
  // title = 'secondngapp';
  loadedFeature = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  */
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCUolZi4uCXr4fcYLeITLQOjo_Zx4qmU2Y",
      authDomain: "ng-http-aaee8.firebaseapp.com"
    });
  }
}
