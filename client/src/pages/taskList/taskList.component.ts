import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ApiService } from '../../app/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { ViewTaskIconComponent } from '../../app/components/view-task-icon/view-task-icon.component';

export interface Tasks {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  complete: boolean;
  view: any;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'task-list',
  styleUrls: ['./taskList.component.less'],
  templateUrl: './taskList.component.html',
  providers: [ApiService]
})
export class TableOverview implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'start', 'end', 'complete', 'view'];
  dataSource: MatTableDataSource<Tasks>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: ApiService) {
    const tasks = [];
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tasks);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTasks();
  }

  getTasks = () => {
    this.api.getAllTasks().subscribe(
      data => {
        data.start = this.formatDate(new Date(data.start))
        data.end = this.formatDate(new Date(data.end))
        this.dataSource = data
      },
      error => {
        console.log(error);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  formatDate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}
