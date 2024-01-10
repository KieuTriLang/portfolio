import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faBars, faImage, faX, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  icon = faImage;
  title = 'portfolio';
  IsOpenedAvatar : boolean = false;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Kieu Tri Lang');
  }
  ngAfterViewInit(): void {
  }

}
