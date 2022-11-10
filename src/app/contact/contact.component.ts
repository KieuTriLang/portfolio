import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  facebookIcon = faFacebook;
  copyIcon = faCopy;
  @ViewChild('contact') contactEl!: ElementRef<HTMLDivElement>;
  @ViewChild('title') titleEl!: ElementRef<HTMLHeadingElement>;
  constructor() {}
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.titleEl.nativeElement, {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: this.contactEl.nativeElement,
        start: 'top 60%',
        end: 'top 30%',
        toggleActions: 'restart none reverse none',
        scrub: true,
      },
    });
    gsap.from('.left', {
      height: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.left h3', {
      x: '-100px',
      opacity: 0,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.left div', {
      y: '25px',
      opacity: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.right h3', {
      x: '100px',
      opacity: 0,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.right a', {
      y: '25px',
      stagger: 0.25,
      opacity: 0,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
  }

  ngOnInit(): void {}
}
