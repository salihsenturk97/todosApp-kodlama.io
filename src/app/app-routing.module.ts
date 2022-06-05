import { PhotoListComponent } from './components/pages/photo-list/photo-list.component';
import { TodosListComponent } from './components/pages/todos-list/todos-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/pages/post-list/post-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:TodosListComponent},
  {path:"todos",component:TodosListComponent},
  {path:"posts",component:PostListComponent},
  {path:"photo",component:PhotoListComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
