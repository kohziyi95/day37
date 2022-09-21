import { CameraService } from './../services/camera.service';
import { WebcamImage } from 'ngx-webcam';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  imageUrl!: string;
  image!: WebcamImage;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cameraSvc: CameraService
  ) {
    this.image = history.state.image;
    this.imageUrl = history.state.imageUrl;
    console.log('img', this.image);
    if (!this.image) router.navigate(['/']);
  }

  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  submitPost() {
    const result = this.cameraSvc.upload(this.postForm.value.title, this.imageUrl).then(result => {
      console.log("Posted: ", result)
    })
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }


}
