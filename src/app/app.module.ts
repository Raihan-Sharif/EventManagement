import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';

import { HomeRoutingModule } from './home/home-routing.module';

import { ViewsModule } from './views/views.module';

import { ErrorModule } from './views/errors/error.module';

import { HomeModule } from './home/home.module';

// main layout

import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from './views/main-layout/navigation/navigation.module';
import { SharedModule } from './views/shared/shared.module';







@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    HomeRoutingModule,
    RouterModule,
    HttpClientModule,
  

  
    SharedModule,
    ViewsModule,
    ErrorModule,
    HomeModule
  ],
  providers: [ DataServiceService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
