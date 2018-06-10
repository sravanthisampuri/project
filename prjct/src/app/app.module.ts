import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule, Router} from "@angular/router";
import {NgForm} from '@angular/forms';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { SubmitAdComponent } from './submit-ad/submit-ad.component';
import { HomeComponent } from './home/home.component';


const router : Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full' },
  {path: 'home',component: HomeComponent },
  { path : 'submitAd' , component : SubmitAdComponent },
   
];

@NgModule({
  declarations: [
    AppComponent,
    SubmitAdComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
