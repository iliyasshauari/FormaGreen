import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {memberComponent} from "./member/member.component";
import {MemberService} from "./member/member.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GoogleMapsModule} from "@angular/google-maps";
import {appRoutingModule} from "./app.routing";
import {greenAreaComponent} from "./greenArea/greenArea.component";
import {mapComponent} from "./map/map.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {homeComponent} from "./home/home.component";






@NgModule({
  declarations: [AppComponent,
              memberComponent,
              greenAreaComponent,
              mapComponent,
              homeComponent
  ],

  imports: [
    appRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GoogleMapsModule,
    BrowserModule, GoogleMapsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
