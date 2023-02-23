import { IType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brand';
import { IPagination } from './../shared/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  baseUrl = 'http://localhost:63253/api/';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(brandId?: number, typeId?: number) {

    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString())
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString())
    }

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      )

  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }



}
