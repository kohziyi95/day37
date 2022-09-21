import { CameraService } from './services/camera.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { ImageComponent } from './components/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: CameraComponent },
  { path: 'image', component: ImageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, CameraComponent, ImageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [CameraService],
  bootstrap: [AppComponent],
})
export class AppModule {}
