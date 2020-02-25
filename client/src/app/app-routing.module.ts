import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { ViewProjectByIdComponent } from './components/view-project-by-id/view-project-by-id.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
