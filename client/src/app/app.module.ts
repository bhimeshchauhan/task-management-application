import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { TableOverviewModule } from '../pages/taskList/taskList.module';
import { DialogModule } from '../pages/dialog/dialog.module';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { ViewProjectByIdComponent } from './components/view-project-by-id/view-project-by-id.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';

const routes: Routes = [
    { path: '', component: ViewProjectComponent },
    { path: 'project', component: EditProjectComponent },
    { path: 'project/:id', component: ViewProjectByIdComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ViewProjectComponent,
    ViewProjectByIdComponent,
    EditProjectComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    TableOverviewModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
