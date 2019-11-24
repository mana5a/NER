import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
baseUrl: string = 'http://localhost:5000/get_tags?typed=';
constructor(private _http: HttpClient) { }
search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }
}