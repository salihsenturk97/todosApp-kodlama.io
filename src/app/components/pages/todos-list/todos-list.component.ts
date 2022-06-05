import { TodoService } from './../../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos:Todo[]=[];
  loaded:boolean=false;

  

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data=>{
      this.loaded=false
      this.todos=data
      this.loaded=true
    });
    console.log("Burası çalıştı");
  }

}
