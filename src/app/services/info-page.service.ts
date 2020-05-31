import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InfoPageInterface } from '../interfaces/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPageInterface = {};
  loading = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPageInterface) => {
      this.loading = true;
      this.info = resp;
    });
  }

  private loadTeam() {
    this.http.get('https://angular-html-647e0.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      this.team = resp;
    });
  }

}
