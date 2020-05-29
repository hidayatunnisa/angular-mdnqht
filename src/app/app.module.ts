import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { HeroserviceService } from './heroservice.service';
import { MessagesComponent } from './messages/messages.component';
import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import{HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule,HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent,MessagesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: []//HeroserviceService
})
export class AppModule { }
