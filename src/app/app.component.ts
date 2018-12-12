import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedTemplate: string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCcQvT_QKcBQj2Ov5spmag6OE0a6Y3MBhk",
      authDomain: "angular-recipe-app-23208.firebaseapp.com",
    });
  }

  onTemplateSelected(template: string) {
    this.loadedTemplate = template;
  }
}
