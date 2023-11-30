import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-g1',
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.scss'],
})
export class FaceSnapG1Component {
  @Input() faceSnap!:FaceSnap;
  onAddSnap = () => this.faceSnap.snaps++;
  onSnap = () =>{
    if (this.faceSnap.buttonText === "Oh Snap !"){
        this.faceSnap.snaps++;
        this.faceSnap.buttonText = "Oops , unsnap";
    }else{
      this.faceSnap.snaps--;
      this.faceSnap.buttonText = "Oh Snap !";
    }
    
  }

}