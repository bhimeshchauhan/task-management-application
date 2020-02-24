import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableOverviewExample } from './taskList.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    TableOverviewExample
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  exports: [TableOverviewExample]
})
export class TableOverviewExampleModule { }
