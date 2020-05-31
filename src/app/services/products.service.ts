import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoProductInterface} from '../interfaces/info-product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: InfoProductInterface[] = [];
  productsFilter: InfoProductInterface[] = [];
  loading = true;

  constructor(private http: HttpClient) {
    // this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-647e0.firebaseio.com/productos_idx.json').subscribe((product: InfoProductInterface[]) => {
        this.products = product;
        this.loading = false;
        resolve();
      });
    });
  }

  public getProductById(id: string) {
    return this.http.get(`https://angular-html-647e0.firebaseio.com/productos/${id}.json`);
  }

  searchProduct(text: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filterProduct(text);
      });
    } else {
      this.filterProduct(text);
    }
  }

  private filterProduct(text: string) {
    text = text.toLowerCase();
    this.productsFilter = this.products.filter(product => product.categoria.toLowerCase().includes(text)
      || product.titulo.toLowerCase().includes(text));
  }

}
