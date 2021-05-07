import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Angular2CsvModule } from 'angular2-csv';

import {QueryInput} from '../query-input';
import {Result} from '../result';
import {QueryService} from '../query.service';
import {SeqSearchService} from '../seq-search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  queryOb: Observable<QueryInput>;
  queryStartOb: Observable<boolean>;
  results: Result[] = [];
  res: [] = [] ;
  display: Result;
  c: string[] = [];

  data = [];



  constructor(private queryService: QueryService, private seqService: SeqSearchService) {
    this.queryOb = queryService.queryReader;
    this.queryStartOb = queryService.queryStartReader;
  }

  ngOnInit(): void {
    this.queryOb.subscribe(query => {
      this.seqService.get_database(query).subscribe(info => {
        const r = new Result(info.body['db'], JSON.parse(info.body['data']), info.body['columns']);
        this.results.push(r);
        console.log('json parse result');
        for (const s of r.result){
          this.res.push(s);
        }
        this.c = r.columns;
        this.display = new Result('db', this.res, this.c);
        for (const row of this.res){
          this.data.push(row);
        }
        console.log(this.display);
      });
    });

  }

  show(): void{
    this.display = new Result('db', this.res, this.c);
    // tslint:disable-next-line:no-unused-expression
    console.log(this.results.length);
    for (const r of this.results){
      console.log(r.result.length);
    }
    console.log(this.res.length);
  }

  clearResult(): void {
    this.results = [];
    this.c = [];
    this.res = [];
  }

  refresh_q(): void{
    location.reload();
  }
}
