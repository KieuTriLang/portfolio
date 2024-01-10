import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild('skill') skillEl!: ElementRef<HTMLDivElement>;
  @ViewChild('title') titleEl!: ElementRef<HTMLHeadingElement>;
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(this.titleEl.nativeElement, { scale: 2, opacity: 0 });

    gsap.to(this.titleEl.nativeElement, {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: this.skillEl.nativeElement,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
    gsap.from('.skill-list p', {
      scale: 1.2,
      opacity: 0,
      delay: 0.25,
      duration: 0.75,
      stagger: 0.15,
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
