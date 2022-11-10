import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  facebookIcon = faFacebook;
  githubIcon = faGithub;
  @ViewChild('name') nameEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('job') jobEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('resume') resumeEl!: ElementRef<HTMLLinkElement>;
  @ViewChild('social') socialEl!: ElementRef<HTMLDivElement>;
  constructor() {}
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.from(this.nameEl.nativeElement, {
      y: '-50%',
      opacity: 0,
      duration: 0.75,
    })
      .from(
        this.jobEl.nativeElement,
        {
          y: '-50%',
          opacity: 0,
          duration: 1,
        },
        '<.5'
      )
      .from(
        this.socialEl.nativeElement,
        {
          y: '50%',
          opacity: 0,
          duration: 1,
        },
        '<.45'
      );
    // gsap.set(this.nameEl.nativeElement, { opacity: 1 });
    // gsap.set(this.jobEl.nativeElement, { opacity: 1 });
    // gsap.set(this.resumeEl.nativeElement, { opacity: 1 });
    // gsap.set(this.socialEl.nativeElement, { opacity: 1 });

    // gsap.to(this.nameEl.nativeElement, {
    //   opacity: 0,
    //   x: '-50%',
    //   scrollTrigger: {
    //     trigger: this.socialEl.nativeElement,
    //     // toggleActions: 'restart none reverse none',
    //     start: 'top 60%',
    //     end: 'top 20%',
    //     scrub: true,
    //     // ,
    //   },
    // });

    // gsap.to(this.jobEl.nativeElement, {
    //   opacity: 0,
    //   x: '50%',
    //   scrollTrigger: {
    //     trigger: this.socialEl.nativeElement,
    //     toggleActions: 'restart none reverse none',
    //     start: 'top 60%',
    //     end: 'top 20%',
    //     scrub: true,
    //     // ,
    //   },
    // });

    // gsap.to(this.resumeEl.nativeElement, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: this.socialEl.nativeElement,
    //     toggleActions: 'restart none reverse none',
    //     start: 'top 60%',
    //     end: 'top 20%',
    //     scrub: true,
    //     // ,
    //   },
    // });

    // gsap.to(this.socialEl.nativeElement, {
    //   opacity: 0,
    //   y: '-50%',
    //   scrollTrigger: {
    //     trigger: this.socialEl.nativeElement,
    //     toggleActions: 'restart none reverse none',
    //     start: 'top 60%',
    //     end: 'top 20%',
    //     scrub: true,
    //     // ,
    //   },
    // });
  }

  ngOnInit(): void {}
}
