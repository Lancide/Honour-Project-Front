import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';

import {QueryInput} from './query-input';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private query = new Subject<QueryInput>();
  queryReader = this.query.asObservable();
  private queryStartSource = new BehaviorSubject<boolean>(null);
  queryStartReader = this.queryStartSource.asObservable();
  constructor() { }

  announceQuery(query: QueryInput): void {
    this.query.next(query);
  }

  announceStartQuery(status: boolean): void {
    this.queryStartSource.next(status);
  }
}
