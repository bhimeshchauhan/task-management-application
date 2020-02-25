import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    return this.http.get(this.baseUrl + '/project/',
      {headers: this.httpHeaders}
    );
  }

  getAllTasks(): Observable<any> {
    return this.http.get(this.baseUrl + '/task/',
      {headers: this.httpHeaders}
    );
  }

  getTasksByProject(id): Observable<any> {
    const taskList = this.getAllTasks()
    return (taskList.pipe(map(item => item.filter(list => list.projectId === id))))
  }

  getOneProject(id): Observable<any> {
    return this.http.get(this.baseUrl + '/project/' + id + '/',
      {headers: this.httpHeaders}
    );
  }

  createProject(project): Observable<any> {
    const payload = {
      name: project.name,
      description: project.description,
      start: project.start,
      avatar: project.avatar
    }
    return this.http.post(this.baseUrl + '/project/', payload,
      {headers: this.httpHeaders}
    );
  }

  createTask(task): Observable<any> {
    const payload = {
      name: task.name,
      description: task.description,
      start: task.start,
      end: task.end,
      projectId: task.projectId,
      complete: task.complete
    }
    return this.http.post(this.baseUrl + '/task/', payload,
      {headers: this.httpHeaders}
    );
  }


  updateProject(project): Observable<any> {
    const payload = {
      name: project.name,
      description: project.description,
      start: project.start,
      avatar: project.avatar
    }
    return this.http.post(this.baseUrl + '/project/', payload,
      {headers: this.httpHeaders}
    );
  }

}
