import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos:Photo[];


  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {

    this.photoService.getPhotos().subscribe(data=>{
      this.photos = data
    });
  }

}
