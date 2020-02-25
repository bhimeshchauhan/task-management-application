import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.less'],
  providers: [ApiService]
})
export class ViewProjectComponent implements OnInit {

  ngOnInit(): void {
  }
  projects = [ ]
  selectedProject = 1
  constructor(private api: ApiService, private router: Router) {
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
  ViewProjectById = (project) => {
    this.router.navigate(['./project/'+project.id]);
  }
}
