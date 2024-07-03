import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5272/'; // Cambia esto a tu URL de la API

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/items`, item);
  }

  updateItem(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }
}
