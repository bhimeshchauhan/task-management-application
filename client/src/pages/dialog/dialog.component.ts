import {Component, Inject, Input} from '@angular/core';
import { ApiService } from '../../app/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'project-dialog-modal',
  templateUrl: './projectDialog.component.html',
  styleUrls: ['./projectDialog.component.less'],
})
export class ProjectDialog {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}
  AddProject(): void {
    const dialogRef = this.dialog.open(ProjectModal, {
      width: '50%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}


@Component({
  selector: 'task-dialog-modal',
  templateUrl: './taskDialog.component.html',
  styleUrls: ['./taskDialog.component.less'],
})
export class TaskDialog {
  animal: string;
  name: string;
  @Input()
  projectId: string;
  constructor(public dialog: MatDialog) {}
  AddTask(): void {
    const dialogRef = this.dialog.open(TaskModal, {
      width: '50%',
      data: {projectId: this.projectId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'project-modal',
  templateUrl: './projectModal.component.html',
  styleUrls: ['./projectModal.component.less'],
  providers: [ApiService]
})
export class ProjectModal {
  projects = [ ]
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProjectModal>,
    private api: ApiService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let urlregex: RegExp = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, [Validators.required]],
      'start': [null, [Validators.required]],
      'avatar': [null, [Validators.required, Validators.pattern(urlregex)]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(payload) {
    this.api.createProject(payload).subscribe(
      data => {
        this.projects.push(payload)
      },
      error => {
        console.log(error);
      }
    )
    this.dialogRef.close();
  }
}


// Modal for adding Task
@Component({
  selector: 'task-modal',
  templateUrl: './taskModal.component.html',
  styleUrls: ['./taskModal.component.less'],
  providers: [ApiService]
})
export class TaskModal {
  tasks = []
  checked = false;
  taskFormGroup: FormGroup;
  titleAlert: string = 'This field is required';
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TaskModal>,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.createTask();
  }

  createTask() {
    this.taskFormGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, [Validators.required]],
      'start': [null, [Validators.required]],
      'end': [null, [Validators.required]],
      'complete': [null, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(payload) {
    payload.projectId = this.data.projectId;
    console.log(payload)
    this.api.createTask(payload).subscribe(
      data => {
        this.tasks.push(payload)
      },
      error => {
        console.log(error);
      }
    )
    this.dialogRef.close();
  }
}
