import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {QueryInput} from './query-input';
import {Result} from './result';
import {QueryService} from './query.service';
import {SeqSearchService} from './seq-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sPEPsearch';
  contact = [{acc: 'Ph', detail: '+00 12345678'},
    {acc: 'E-mail', detail: 'abcd@efg.com'}
    ];

  constructor() {
  }


  ngOnInit(): void {

  }
}
