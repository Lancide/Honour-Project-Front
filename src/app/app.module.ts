import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { Angular2CsvModule } from 'angular2-csv';


import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { QueryService} from './query.service';
import { SeqSearchService} from './seq-search.service';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuideComponent } from './guide/guide.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HomePageComponent,
    NavigationComponent,
    SearchResultComponent,
    SearchResultComponent,
    SearchComponent,
    GuideComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    MatProgressBarModule,
    Angular2CsvModule,

    RouterModule.forRoot([
      {path: 'home', component: HomePageComponent},
      {path: 'search', component: SearchComponent},
      {path: 'guide', component: GuideComponent},
      {path: 'tool', component: ToolsComponent}
      // {path: 'search/:queryDetail', component: SearchResultComponent}
      // {path: '',   redirectTo: 'home', pathMatch: 'full'}
      //
    ]),

    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    QueryService,
    SeqSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
