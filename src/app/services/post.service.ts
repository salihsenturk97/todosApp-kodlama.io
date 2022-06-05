import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPost():Observable<Post[]>{ //component bu isimle çağrılır

    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
