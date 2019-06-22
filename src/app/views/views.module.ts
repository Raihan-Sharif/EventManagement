import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';



import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';



import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';

import { DataServiceService } from 'app/data-service.service';
import { BasicTableComponent } from './Admin/tables/basic-table/basic-table.component';
import { ModalsComponent } from './Admin/modals/modals.component';
import { Dashboard1Component } from './Admin/dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './Admin/profile/profile1/profile1.component';
import { CategoryComponent } from './Admin/Create/category/category.component';
import { CategoryTypeComponent } from './Admin/Create/category-type/category-type.component';
import { PlacesComponent } from './Admin/Create/places/places.component';
import { PlaceShiftsComponent } from './Admin/Create/place-shifts/place-shifts.component';
import { ShiftsComponent } from './Admin/Create/shifts/shifts.component';
import { ServicesComponent } from './Admin/Create/services/services.component';
import { SubCategoryComponent } from './Admin/Create/sub-category/sub-category.component';

import { CategoryListComponent } from './Admin/ViewList/category-list/category-list.component';
import { SubCategoryListComponent } from './Admin/ViewList/sub-category-list/sub-category-list.component';
import { CategoryDetailsComponent } from './Admin/View-Details/category-details/category-details.component';
import { SubCategoryDetailsComponent } from './Admin/View-Details/sub-category-details/sub-category-details.component';
import { CategoryTypeDetailsComponent } from './Admin/View-Details/category-type-details/category-type-details.component';
import { CategoryUpdateComponent } from './Admin/Update/category-update/category-update.component';
import { SubCategoryUpdateComponent } from './Admin/Update/sub-category-update/sub-category-update.component';
import { CategoryTypeUpdateComponent } from './Admin/Update/category-type-update/category-type-update.component';
import { CategoryTypeListComponent } from './Admin/ViewList/category-type-list/category-type-list.component';
import { ContactListComponent } from './Admin/ViewList/contact-list/contact-list.component';
import { ShiftListComponent } from './Admin/ViewList/shift-list/shift-list.component';
import { ShiftUpdateComponent } from './Admin/Update/shift-update/shift-update.component';
import { ContactUpdateComponent } from './Admin/Update/contact-update/contact-update.component';
import { ContactDetailsComponent } from './Admin/View-Details/contact-details/contact-details.component';
import { ShiftDetailsComponent } from './Admin/View-Details/shift-details/shift-details.component';
import { ContactCreateComponent } from './Admin/Create/contact-create/contact-create.component';
import { ServicesUpdateComponent } from './Admin/Update/services-update/services-update.component';
import { ServiceListComponent } from './Admin/ViewList/service-list/service-list.component';
import { ServiceDetailsComponent } from './Admin/View-Details/service-details/service-details.component';
import { ViewsComponent } from './views.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './main-layout/footer/footer.component';
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { PlaceUpdateComponent } from './Admin/Update/place-update/place-update.component';
import { PlaceListComponent } from './Admin/ViewList/place-list/place-list.component';
import { PlaceDetailsComponent } from './Admin/View-Details/place-details/place-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RoleCreateComponent } from './Home/role-create/role-create.component';
import { RoleListComponent } from './Home/role-list/role-list.component';
import { RoleUpdateComponent } from './Home/role-update/role-update.component';
import { UserListComponent } from './Home/user-list/user-list.component';
import { UserUpdateComponent } from './Home/user-update/user-update.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    
    NavigationModule,


    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [ViewsComponent],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,



    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    Profile1Component,
    CategoryComponent,
    CategoryTypeComponent,
    PlacesComponent,
    PlaceShiftsComponent,
    ShiftsComponent,
    ServicesComponent,
    SubCategoryComponent,
    CategoryListComponent,
    SubCategoryListComponent,
    CategoryDetailsComponent,
    SubCategoryDetailsComponent,
    CategoryTypeDetailsComponent,
    CategoryUpdateComponent,
    SubCategoryUpdateComponent,
    CategoryTypeUpdateComponent,
    CategoryTypeListComponent,
    ContactListComponent,
    ShiftListComponent,
    ShiftUpdateComponent,
    ContactUpdateComponent,
    ContactDetailsComponent,
    ShiftDetailsComponent,
    ContactCreateComponent,
    ServicesUpdateComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    ViewsComponent,
    PlaceUpdateComponent,
    PlaceListComponent,
    PlaceDetailsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    RoleCreateComponent,
    RoleListComponent,
    RoleUpdateComponent,
    UserListComponent,
    UserUpdateComponent



  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,

  
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    CategoryComponent,
    CategoryTypeComponent,
    PlacesComponent,
    PlaceShiftsComponent,
    ShiftsComponent,
    ServicesComponent,
    SubCategoryComponent



  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
