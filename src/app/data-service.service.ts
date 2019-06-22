import { Injectable, Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
// api server url
private _categoryDataUrl = 'http://localhost:50000/api/category';
private _onSubCategoryDataUrl = 'http://localhost:50000/api/SubCategory';

private _onCategoryTypeUrl = 'http://localhost:50000/api/CategoryType';
private _onShiftUrl = 'http://localhost:50000/api/Shift';
private _onContactUrl = 'http://localhost:50000/api/Contact';
private _onServiceDataUrl = 'http://localhost:50000/api/Service';
private _onPlaceDataUrl = 'http://localhost:50000/api/Place';
private _onShiftPlaceDataUrl = 'http://localhost:50000/api/ShiftPlace';


private _loginUrl = 'http://localhost:50000/api/Account/Login';
private _regData = 'http://localhost:50000/api/Account/CustomerRegister';
private _userdataUrl = 'http://localhost:50000/api/User';
private _roledataUrl = 'http://localhost:50000/api/Role';

// inject httpClient for request server api
  constructor(private http: HttpClient, private _router: Router, private injector: Injector) { }
// Login 

onLoggedin(user) {
  return this.http.post<any>(this._loginUrl, user);
}
logoutUser() {
localStorage.removeItem('token');
this._router.navigate(['/Login']);
}

getToken() {
return localStorage.getItem('token');
}

loggedIn() {
return !!localStorage.getItem('token');
}

intercept(req, next) {
  const authService = this.injector.get(DataServiceService);
  const tokenizedReq = req.clone(
    {
      headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
    }
  );
  return next.handle(tokenizedReq);
}


onUserCreate(user) {
  return this.http.post<any>(this._regData, user);
}

onUserData() {
  return this.http.get<any>(this._userdataUrl);
}
onUserDatabyId(id) {
  return this.http.get<any>(this._userdataUrl + '/' + id);
}
onUserUpdate(user) {
  return this.http.put<any>(this._userdataUrl, user);
}
onUserDelete(id) {
  return this.http.delete<any>(this._userdataUrl + '/' + id);
}

// Role
onRoleData() {
  return this.http.get<any>(this._roledataUrl);
}
onRoleDatabyId(id) {
  return this.http.get<any>(this._roledataUrl + '/' + id);
}
onRoleCreate(role) {
  return this.http.post<any>(this._roledataUrl, role);
}
onRoleUpdate(role) {
  return this.http.put<any>(this._roledataUrl, role);
}
onRoleDelete(id) {
  return this.http.delete<any>(this._roledataUrl + '/' + id);
}


      // category

    onCategoryData() {
      return this.http.get<any>(this._categoryDataUrl);
    }
    onCategoryDatabyId(id) {
      return this.http.get<any>(this._categoryDataUrl + '/' + id);
    }
    onCategoryCreate(category) {
      const obj = {
        CategoryName : category.categoryName
      };
      return this.http.post<any>(this._categoryDataUrl, obj);
    }
    onCategoryUpdate(category) {
      return this.http.put<any>(this._categoryDataUrl, category);
    }
    onCategoryDelete(id) {
      return this.http.delete<any>(this._categoryDataUrl + '/' + id);
    }


        // sub-category

        onSubCategoryData() {
          return this.http.get<any>(this._onSubCategoryDataUrl);
        }
        onSubCategoryDatabyCategoryId(id) {
          return this.http.get<any>(this._onSubCategoryDataUrl + '/FindbyCategoryId/' + id);
        }
        onSubCategoryDataByName() {
          return this.http.get<any>(this._onSubCategoryDataUrl + "/GetAllName");
        }
        onSubCategoryDatabyId(id) {
          return this.http.get<any>(this._onSubCategoryDataUrl + '/' + id);
        }
        onSubCategoryCreate(subCategory) {
         
          return this.http.post<any>(this._onSubCategoryDataUrl, subCategory);
        }
        onSubCategoryUpdate(SubCategory) {
          //logic may be needed for update data
          return this.http.put<any>(this._onSubCategoryDataUrl, SubCategory);
        }
        onSubCategoryDelete(id) {
          return this.http.delete<any>(this._onSubCategoryDataUrl + '/' + id);
        }

    // category-type

    onCategoryTypeData() {
      return this.http.get<any>(this._onCategoryTypeUrl);
    }
    onCategoryTypeDatabySubCategoryId(id) {
      return this.http.get<any>(this._onCategoryTypeUrl + '/FindBySucategoryId/' + id);
    }
    onCategoryTypeDataByName() {
      return this.http.get<any>(this._onCategoryTypeUrl + "/GetAllName");
    }
    onCategoryTypeDatabyId(id) {
      return this.http.get<any>(this._onCategoryTypeUrl + '/' + id);
    }
    onCategoryTypeCreate(categoryType) {
      return this.http.post<any>(this._onCategoryTypeUrl, categoryType);
    }
    onCategoryTypeUpdate(categoryType) {
      return this.http.put<any>(this._onCategoryTypeUrl, categoryType);
    }
    onCategoryTypeDelete(id) {
      return this.http.delete<any>(this._onCategoryTypeUrl + '/' + id);
    }

        // Shift

        onShiftData() {
          return this.http.get<any>(this._onShiftUrl);
        }
        onShiftDataById(id) {
          return this.http.get<any>(this._onShiftUrl + '/' + id);
        }
        onShiftCreate(Shift) {
          return this.http.post<any>(this._onShiftUrl, Shift);
        }
        onShiftUpdate(Shift) {
          return this.http.put<any>(this._onShiftUrl, Shift);
        }
        onShiftDelete(id) {
          return this.http.delete<any>(this._onShiftUrl + '/' + id);
        }

                // Contact

                onContactData() {
                  return this.http.get<any>(this._onContactUrl);
                }
                onContactDataById(id) {
                  return this.http.get<any>(this._onContactUrl + '/' + id);
                }
                onContactCreate(Contact) {
                  return this.http.post<any>(this._onContactUrl, Contact);
                }
                onContactUpdate(Contact) {
                  return this.http.put<any>(this._onContactUrl, Contact);
                }
                onContactDelete(id) {
                  return this.http.delete<any>(this._onContactUrl + '/' + id);
                }

  // Services

  onServiceGetAllData() {
    return this.http.get<any>(this._onServiceDataUrl);
  }
  onCategoryTypeDatabyGetByCategotyTypeId(id) {
    return this.http.get<any>(this._onServiceDataUrl + '/GetByCategotyType/' + id);
  }
  onCategoryTypeDatabyGetByGetByVendorId(id) {
    return this.http.get<any>(this._onServiceDataUrl + '/GetByVendor/' + id);
  }
  onServiceGetDatabyId(id) {
    return this.http.get<any>(this._onServiceDataUrl + '/' + id);
  }
  onServiceGetCreate(Services) {
    return this.http.post<any>(this._onServiceDataUrl, Services);
  }
  onServiceGetUpdate(Services) {
    return this.http.put<any>(this._onServiceDataUrl, Services);
  }
  onServiceGetDelete(id) {
    return this.http.delete<any>(this._onServiceDataUrl + '/' + id);
  }

   // PlacesShift

   onShiftPlaceGetAllData() {
    return this.http.get<any>(this._onShiftPlaceDataUrl);
  }
  onShiftPlaceGetDatabyId(id) {
    return this.http.get<any>(this._onShiftPlaceDataUrl + '/' + id);
  }
  onShiftPlaceGetCreate(Places) {
    return this.http.post<any>(this._onShiftPlaceDataUrl, Places);
  }
  onShiftPlaceGetUpdate(Places) {
    return this.http.put<any>(this._onShiftPlaceDataUrl, Places);
  }
  onShiftPlaceGetDelete(id) {
    return this.http.delete<any>(this._onShiftPlaceDataUrl + '/' + id);
  }

     // Places

     onPlaceGetAllData() {
      return this.http.get<any>(this._onPlaceDataUrl);
    }
    onPlaceGetDatabyId(id) {
      return this.http.get<any>(this._onPlaceDataUrl + '/' + id);
    }
    onPlaceGetCreate(Places) {
      return this.http.post<any>(this._onPlaceDataUrl, Places);
    }


}
