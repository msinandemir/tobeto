import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { AddCategory } from '../models/add-category';
import { AddedCategory } from '../models/added-category';
import { core } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  add(category: AddCategory): Observable<AddedCategory> {
    return this.http.post<AddedCategory>(this.apiControllerUrl, category);
  }
  
  getById(categoryId:number): Observable<CategoryListItem>{
    return this.http.get<CategoryListItem>(`${this.apiControllerUrl}/${categoryId}`)
  }

  updateById(categoryId:number,category:CategoryListItem): Observable<CategoryListItem>{
    return this.http.put<CategoryListItem>(`${this.apiControllerUrl}/${categoryId}`,category)
  }

  deleteById(categoryId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiControllerUrl}/${categoryId}`)
  }
}
