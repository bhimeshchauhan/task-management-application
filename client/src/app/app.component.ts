import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ApiService]
})
export class AppComponent {
  projects = [ ]
  constructor(private api: ApiService) {
    this.getProjects();
  }
  getProjects = () => {
    this.api.getAllProjects().subscribe(
      data => {
        this.projects = data
      },
      error => {
        console.log(error);
      }
    )
  }
}
