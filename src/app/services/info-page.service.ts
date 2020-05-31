import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InfoPageInterface } from '../interfaces/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPageInterface = {};
  loading = false;

  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPageInterface) => {
      this.loading = true;
      this.info = resp;
    });

  }
}
