import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDeNLPZSo1CXuqJQ9c70SuiZ_IIy6fJvHQ",
  authDomain: "bioattend-9b14b.firebaseapp.com",
  databaseURL: "https://bioattend-9b14b-default-rtdb.firebaseio.com",
  projectId: "bioattend-9b14b",
  storageBucket: "bioattend-9b14b.appspot.com",
  messagingSenderId: "1080357571656",
  appId: "1:1080357571656:web:f773c3dc94faf1f52a5c7d",
  measurementId: "G-0NEPEJSVLM"
};



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
