import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Kieu Tri Lang');
  }
  ngAfterViewInit(): void {}
}
