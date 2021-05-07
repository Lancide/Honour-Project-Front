import {Component, Input, OnInit} from '@angular/core';
import { ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {QueryInput} from '../query-input';
import {Result} from '../result';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  columns = [];
  rows = [];
  cols = [
    {prop: 'data1', name: 'First Name'},
    {prop: 'data2', name: 'Last Name'}
  ];

  //
  get resultData(): Result {
    return this._resultData;
  }
  columnMode = ColumnMode;
  @Input() set resultData(value: Result) {
    this._resultData = value;
    this.columns = [];
  }
  constructor(private cd: ChangeDetectorRef) { }

  fetch(cb: any): void {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  _resultData: Result;


  ngOnInit(): void {
  }

}
