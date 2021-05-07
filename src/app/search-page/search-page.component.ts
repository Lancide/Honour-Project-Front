import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {QueryService} from '../query.service';
import {QueryInput} from '../query-input';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  query = new QueryInput('', '');
  queryForm: FormGroup;
  load: boolean;
  ty: boolean;
  constructor(
    // private seqSearchService: SeqSearchService,
    private queryService: QueryService,
    private formBuilder: FormBuilder,
  ){
    this.queryForm = this.formBuilder.group({
      seq: '',

      databases: new FormControl(this.databases),
    });

  }
  // species = [
  //   {name: 'Human'},
  //   {name: 'E. Coli'},
  //   {name: 'Rats'},
  // ];
  databases = [
    {name: 'uPEPeroni'},
    {name: 'sProt'},
    {name: 'ncEP'}
  ];
  // selective form or check boxes?
  handIn(): void{
    this.load = true;
    this.ty = true;
    console.log(this.load);
    this.queryService.announceStartQuery(false);
    this.query.sequence = this.queryForm.value.seq;
    for (const db of this.queryForm.value.databases) {
      this.query.database = db.name;
      console.log(this.query);
      this.queryService.announceQuery(this.query);
    }
    this.load = false;
    console.log(this.load);
    // Notation
    // this.query.database = this.queryForm.value.databases;
    // window.alert('Search will be performed');
    // console.log(this.query);
  }
  ngOnInit(): void {  }

}
