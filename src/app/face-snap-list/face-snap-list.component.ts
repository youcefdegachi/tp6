import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnap!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
    this.faceSnap = [
      {
      title:'Archiblad',
      description:"Mon meilleur ami depuis tout petit !",
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      snaps:0,
      buttonText:'oh snap'
    },
    {
      title:'three rock mountain',
      description:'endroit magnifique',
      imageUrl:'https://imgs.search.brave.com/cw-qBgMZKMl5I0u_E961um1-x7MTbFkOdMYO-sBHsaA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjUz/ODcwOTM2L3Bob3Rv/L3BhbGVzdGluZS1m/bGFnLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wRUhGVUk0/RVFiaktMZnRnVjdy/QXVrcktXLTMtU0Jv/NUtfUXVzalZtbGdB/PQ',
      createdDate:new Date(),
      snaps:0,
      buttonText:'oh snap'
    },
    {
      title:'tn bon repas',
      description:'yummn c bon!',
      imageUrl:'https://imgs.search.brave.com/YpkwgUM-AlX5KA9yaiXpx4hoLfHWe0_O9TNNPZbAbdk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDI5ODIxL3Bob3Rv/L2Nsb3NlLXVwLW9m/LXBhbGVzdGluaWFu/LWZsYWcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWZmbllE/UXJ1Q2pfVFZHanFU/LUk3V1dUTFRCR1k4/ZnAyWDF6YmFVOFF3/R2s9',
      createdDate:new Date(),
      snaps:0,
      buttonText:'oh snap'
    }
    ];
  }
  constructor(private faceSnapsService: FaceSnapsService) { }

}

