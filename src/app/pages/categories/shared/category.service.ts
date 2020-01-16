import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { Category } from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "assets/categories.json";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.apiPath)
      .toPromise()
      .then(res => <Category[]>res)
      .then(data => { return data; });
    }


  getAll(): Observable<Category[]> {
    return this.http.get(this.apiPath).pipe(
      map(this.jsonDataToCategories),
      catchError(this.handleError)
    )
  }




  // PRIVATE METHODS

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}