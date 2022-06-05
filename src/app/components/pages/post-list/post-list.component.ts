import { HttpClient } from '@angular/common/http';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[];


  constructor(private postService:PostService) { }

  ngOnInit(): void {

    this.postService.getPost().subscribe(data=>{
      this.posts = data
    })


  }

}
