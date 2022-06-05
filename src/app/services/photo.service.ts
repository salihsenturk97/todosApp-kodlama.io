import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient:HttpClient) { }

getPhotos():Observable<Photo[]>{ //component bu isimle çağrılır

  return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
}

}
