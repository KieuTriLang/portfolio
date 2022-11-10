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
  @ViewChild('item1') item1El!: ElementRef<HTMLDivElement>;
  @ViewChild('item2') item2El!: ElementRef<HTMLDivElement>;
  @ViewChild('item3') item3El!: ElementRef<HTMLDivElement>;
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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: this.titleEl.nativeElement,
          start: 'top 40%',
          end: 'top 40%',
          toggleActions: 'restart none reverse none',
        },
      })
      .from(this.item1El.nativeElement, {
        opacity: 0,
        y: '30%',
        duration: 0.5,
      })
      .from(
        this.item2El.nativeElement,
        {
          opacity: 0,
          y: '30%',
          duration: 0.5,
        },
        '<.25'
      )
      .from(
        this.item3El.nativeElement,
        {
          opacity: 0,
          y: '30%',
          duration: 0.5,
        },
        '<.25'
      );
    // gsap.set(this.item1El.nativeElement, { opacity: 1 });
    // gsap.set(this.item2El.nativeElement, { opacity: 1 });
    // gsap.set(this.item3El.nativeElement, { opacity: 1 });
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: this.item1El.nativeElement,
    //       start: 'top 10%',
    //       end: 'top 10%',
    //       toggleActions: 'restart none reverse none',
    //     },
    //   })
    //   .to(
    //     this.item1El.nativeElement,
    //     {
    //       opacity: 0,
    //       x: '-50%',
    //       duration: 0.5,
    //     },
    //     '<.1'
    //   )
    //   .to(
    //     this.item2El.nativeElement,
    //     {
    //       opacity: 0,
    //       y: '-30%',
    //       duration: 0.5,
    //     },
    //     '<.1'
    //   )
    //   .to(
    //     this.item3El.nativeElement,
    //     {
    //       opacity: 0,
    //       x: '50%',
    //       duration: 0.5,
    //     },
    //     '<.1'
    //   );
  }

  ngOnInit(): void {}
}
