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
  selectedProject = 1
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
  setSelectedProject = (project) => {
    this.selectedProject = project.id;
  }
}
