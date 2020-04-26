import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Category, LoginResponse} from "./models"; 





@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  
//  getCategory(id: number): Observable<any> {
//    return of(categories.find(category => category.id === id));
 // }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

/*
  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }
*/

  deleteCategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/categories/${id}/`);
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      "username": username,
      "password": password
    })
  }
}
