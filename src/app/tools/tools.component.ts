import { Component, OnInit } from '@angular/core';
import {Tooltable} from '../tooltable';
import {ColumnMode} from '@swimlane/ngx-datatable'
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tooltable = new Tooltable();
  columns = this.tooltable.columns;
  rows = this.tooltable.rows;

  constructor() { }
  columnMode = ColumnMode;
  ngOnInit(): void {
  }

}
