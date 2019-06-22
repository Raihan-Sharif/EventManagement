import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ServicePageComponent } from './Views/service-page/service-page.component';
import { ServicesDetailsComponent } from './Views/services-details/services-details.component';
import { PlacesDetailsComponent } from './Views/places-details/places-details.component';
import { PlacesPageComponent } from './Views/places-page/places-page.component';
import { ContactPageComponent } from './Views/contact-page/contact-page.component';
import { ServiceOrderComponent } from './Views/service-order/service-order.component';
import { PlaceOrderComponent } from './Views/place-order/place-order.component';
import { PlaceCartComponent } from './Views/place-cart/place-cart.component';
import { ServiceCartComponent } from './Views/service-cart/service-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [HomeComponent, ServicePageComponent, ServicesDetailsComponent, PlacesDetailsComponent, PlacesPageComponent, ContactPageComponent, ServiceOrderComponent, PlaceOrderComponent, PlaceCartComponent, ServiceCartComponent]
})
export class HomeModule { }
