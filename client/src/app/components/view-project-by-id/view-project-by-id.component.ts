import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project-by-id',
  templateUrl: './view-project-by-id.component.html',
  styleUrls: ['./view-project-by-id.component.less'],
  providers: [ApiService]
})
export class ViewProjectByIdComponent implements OnInit {
  dataLoaded: Promise<boolean>
  projects:any = <any>{}
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService){
    this.activatedRoute.params.subscribe(params => {
        this.id = params.id
    });
  }
  ngOnInit(): void {
    this.getOneProject(this.id);
  }
  getOneProject = (id) => {
    this.api.getOneProject(id).subscribe(
      data => {
        this.projects = data
      },
      error => {
        console.log(error);
      }
    )
  }

}
