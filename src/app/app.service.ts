import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getReadme() {
    return this.http
      .get(`https://raw.githubusercontent.com/renamoo/ng-simple-carousel/master/README.md`, { responseType: 'text' });
  }
}
