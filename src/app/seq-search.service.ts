import { Injectable } from '@angular/core';

import {QueryInput} from './query-input';
import { Observable} from 'rxjs';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SeqSearchService {
  constructor(private httpClient: HttpClient) { }
  // process query info
  private baseURL = 'http://localhost:8000/';

  // each search correspond to each query
  get_database(input: QueryInput): Observable<HttpResponse<{
  }>> {
    let params = new HttpParams(); // build url
    params = params.append('sequence', input.sequence);

    params = params.append('db', input.database);
    // more search mode add here
    const url = this.baseURL + 'api/';
    return this.httpClient.get(url, {observe: 'response', params});
  }

}
