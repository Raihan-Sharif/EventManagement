

import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';

import { from } from 'rxjs';
import { Dashboard1Component } from './views/Admin/dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './views/Admin/profile/profile1/profile1.component';
import { BasicTableComponent } from './views/Admin/tables/basic-table/basic-table.component';
import { CategoryListComponent } from './views/Admin/ViewList/category-list/category-list.component';
import { CategoryComponent } from './views/Admin/Create/category/category.component';
import { CategoryDetailsComponent } from './views/Admin/View-Details/category-details/category-details.component';
import { CategoryUpdateComponent } from './views/Admin/Update/category-update/category-update.component';
import { CategoryTypeListComponent } from './views/Admin/ViewList/category-type-list/category-type-list.component';
import { CategoryTypeComponent } from './views/Admin/Create/category-type/category-type.component';
import { CategoryTypeDetailsComponent } from './views/Admin/View-Details/category-type-details/category-type-details.component';
import { CategoryTypeUpdateComponent } from './views/Admin/Update/category-type-update/category-type-update.component';
import { SubCategoryListComponent } from './views/Admin/ViewList/sub-category-list/sub-category-list.component';
import { SubCategoryComponent } from './views/Admin/Create/sub-category/sub-category.component';
import { SubCategoryDetailsComponent } from './views/Admin/View-Details/sub-category-details/sub-category-details.component';
import { SubCategoryUpdateComponent } from './views/Admin/Update/sub-category-update/sub-category-update.component';
import { ShiftListComponent } from './views/Admin/ViewList/shift-list/shift-list.component';
import { ShiftsComponent } from './views/Admin/Create/shifts/shifts.component';
import { ShiftDetailsComponent } from './views/Admin/View-Details/shift-details/shift-details.component';
import { ShiftUpdateComponent } from './views/Admin/Update/shift-update/shift-update.component';
import { ContactListComponent } from './views/Admin/ViewList/contact-list/contact-list.component';
import { ContactCreateComponent } from './views/Admin/Create/contact-create/contact-create.component';
import { ContactDetailsComponent } from './views/Admin/View-Details/contact-details/contact-details.component';
import { ContactUpdateComponent } from './views/Admin/Update/contact-update/contact-update.component';
import { ServiceListComponent } from './views/Admin/ViewList/service-list/service-list.component';
import { ServicesComponent } from './views/Admin/Create/services/services.component';
import { ServiceDetailsComponent } from './views/Admin/View-Details/service-details/service-details.component';
import { ServicesUpdateComponent } from './views/Admin/Update/services-update/services-update.component';
import { ModalsComponent } from './views/Admin/modals/modals.component';
import { HomeComponent } from './home/home.component';
import { ServicePageComponent } from './home/Views/service-page/service-page.component';
import { ServicesDetailsComponent } from './home/Views/services-details/services-details.component';
import { PlacesDetailsComponent } from './home/Views/places-details/places-details.component';
import { PlacesPageComponent } from './home/Views/places-page/places-page.component';
import { PlaceListComponent } from './views/Admin/ViewList/place-list/place-list.component';
import { PlacesComponent } from './views/Admin/Create/places/places.component';
import { PlaceDetailsComponent } from './views/Admin/View-Details/place-details/place-details.component';
import { PlaceUpdateComponent } from './views/Admin/Update/place-update/place-update.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RegistrationPageComponent } from './views/registration-page/registration-page.component';
import { ServiceOrderComponent } from './home/Views/service-order/service-order.component';
import { ServiceCartComponent } from './home/Views/service-cart/service-cart.component';
import { PlaceOrderComponent } from './home/Views/place-order/place-order.component';
import { PlaceCartComponent } from './home/Views/place-cart/place-cart.component';
import { UserListComponent } from './views/Home/user-list/user-list.component';
import { UserUpdateComponent } from './views/Home/user-update/user-update.component';
import { RoleListComponent } from './views/Home/role-list/role-list.component';
import { RoleCreateComponent } from './views/Home/role-create/role-create.component';
import { RoleUpdateComponent } from './views/Home/role-update/role-update.component';



const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'Home', children:
      [{ path: '', component: HomeComponent },
      {
        path: 'Services', children:
          [
            { path: '', component: ServicePageComponent },
            { path: 'Details/:id', component: ServicesDetailsComponent },
            { path: 'Orders/:id', component: ServiceOrderComponent },
            { path: 'Cart/:id', component: ServiceCartComponent }
          ]
      },
      {
        path: 'Places', children:
          [
            { path: '', component:  PlacesPageComponent},
            { path: 'Details/:id', component: PlacesDetailsComponent },
            { path: 'Orders/:id', component: PlaceOrderComponent },
            { path: 'Cart/:id', component: PlaceCartComponent }
          ]
      }
      ]
  },
  {
    path: 'dashboards', children:
      [
        { path: '', component: Dashboard1Component },
      ]
  },
  {
    path: 'profiles', children:
      [
        { path: 'profile1', component: Profile1Component },
      ]
  },
  {
    path: 'tables', children:
      [
        { path: 'table1', component: BasicTableComponent },
      ]
  },
  {
    path: 'Category', children:
      [
        { path: '', component: CategoryListComponent },
        { path: 'Create', component: CategoryComponent },
        { path: 'Details/:id', component: CategoryDetailsComponent },
        { path: 'Edit/:id', component: CategoryUpdateComponent }

      ]

  },

  {
    path: 'CategoryType', children:
      [
        { path: '', component: CategoryTypeListComponent },
        { path: 'Create', component: CategoryTypeComponent },
        { path: 'Details/:id', component: CategoryTypeDetailsComponent },
        { path: 'Edit/:id', component: CategoryTypeUpdateComponent }

      ]
  },
  {
    path: 'SubCategory', children:
      [
        { path: '', component: SubCategoryListComponent },
        { path: 'Create', component: SubCategoryComponent },
        { path: 'Details/:id', component: SubCategoryDetailsComponent },
        { path: 'Edit/:id', component: SubCategoryUpdateComponent }

      ]
  },
  {
    path: 'Shift', children:
      [
        { path: '', component: ShiftListComponent },
        { path: 'Create', component: ShiftsComponent },
        { path: 'Details/:id', component: ShiftDetailsComponent },
        { path: 'Edit/:id', component: ShiftUpdateComponent }

      ]
  },
  {
    path: 'Contact', children:
      [
        { path: '', component: ContactListComponent },
        { path: 'Create', component: ContactCreateComponent },
        { path: 'Details/:id', component: ContactDetailsComponent },
        { path: 'Edit/:id', component: ContactUpdateComponent }

      ]
  },
  {
    path: 'Services', children:
      [
        { path: '', component: ServiceListComponent },
        { path: 'Create', component: ServicesComponent },
        { path: 'Details/:id', component: ServiceDetailsComponent },
        { path: 'Edit/:id', component: ServicesUpdateComponent }

      ]
  },
  { path: 'Places', children:
[
  { path: '', component: PlaceListComponent },
  { path: 'Create', component: PlacesComponent },
  { path: 'Details/:id', component: PlaceDetailsComponent },
  { path: 'Edit/:id', component: PlaceUpdateComponent }

]
},

{ path: 'User', children:
[
  { path: '', component: UserListComponent },
  { path: 'Edit/:id', component: UserUpdateComponent }

]
},

{
  path: 'Role', children:
    [
      { path: '', component: RoleListComponent },
      { path: 'Create', component: RoleCreateComponent },
      { path: 'Edit/:id', component: RoleUpdateComponent }

    ]

},

{ path: 'Login', component: LoginPageComponent },
{ path: 'Registration', component: RegistrationPageComponent },

  { path: 'modals', component: ModalsComponent },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
