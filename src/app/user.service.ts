import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9400';

  constructor(private http: HttpClient) { }


  public addProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/product/add`, formData);
  }

  public getAllProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/product/get/all`);
  }

  public getProductByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/product/getByName/${name}`);
  }

  public deleteProduct(pid: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/product/delete/${pid}`);
  }

  public findById(pid: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/product/getById/${pid}`);
  }

  public updateProduct(pid: number, product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/product/update/${pid}`, product);
  }

  public setAvailable(pid: number, product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/product/set-availability/${pid}`, product['isAvailable']);
  }
  



//Order related apis



  public getOrderById(oid: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/order/get/orderInvoice/${oid}`);
  }

  public getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/order/get/all`);
  }

  public deleteOrder(oid: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/order/delete/${oid}`);
  }

  public getOrderByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/order/get/byUsername/${username}`);
  }
}