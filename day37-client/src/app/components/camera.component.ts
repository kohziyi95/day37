import { Router, TitleStrategy } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  trigger = new Subject<void>();

  triggerObservable = this.trigger.asObservable();


  triggerSnapshot() {
    this.trigger.next();
    console.log(this.trigger);
  }

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  // public handleImage(webcamImage: WebcamImage): void {
  //   console.info('received webcam image', webcamImage);
  //   this.pictureTaken.emit(webcamImage);
  // }
  image!: WebcamImage;

  imageUrl!: string;

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.image = webcamImage;
    this.imageUrl = webcamImage.imageAsDataUrl;
    // console.log(this.image);
    // console.log(this.imageUrl)
    this.router.navigate(['image'], {
      state: { image: this.image, imageUrl: this.imageUrl },
    });
  }
}
