import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoProductInterface} from '../interfaces/info-product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: InfoProductInterface[] = [];
  loading = true;

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-html-647e0.firebaseio.com/productos_idx.json').subscribe((product: InfoProductInterface[]) => {
      this.products = product;
      this.loading = false;
    });
  }

  public getProductById(id: string) {
    return this.http.get(`https://angular-html-647e0.firebaseio.com/productos/${id}.json`);
  }
}
