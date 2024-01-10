import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  githubIcon = faGithub;
  folderIcon = faFolderOpen;
  @ViewChild('project') projectEl!: ElementRef<HTMLDivElement>;
  @ViewChild('title') titleEl!: ElementRef<HTMLHeadingElement>;
  constructor() {}
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.titleEl.nativeElement, {
      letterSpacing: '25px',
      opacity: 0,
      scrollTrigger: {
        trigger: this.projectEl.nativeElement,
        start: 'top 60%',
        end: 'top 20%',
        toggleActions: 'restart none reverse none',
        scrub: true,
      },
    });
    gsap.from('.card', {
      y: '50%',
      opacity: 0,
      duration: 0.75,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });

    gsap.from('.p1 .description', {
      x: '-50%',
      opacity: 0,
      duration: 0.75,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.p1 span', {
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.p1 .source-code', {
      x: '-50%',
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.p2 .description', {
      x: '-50%',
      opacity: 0,
      duration: 0.75,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    
    gsap.from('.p2 span', {
      scale: 1.2,
      opacity: 0,
      delay: 0.5,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    
    gsap.from('.p2 .source-code', {
      x: '-50%',
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    gsap.from('.p3 .description', {
      x: '-50%',
      opacity: 0,
      duration: 0.75,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    
    gsap.from('.p3 span', {
      scale: 1.2,
      opacity: 0,
      delay: 0.5,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: this.titleEl.nativeElement,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'restart none reverse none',
      },
    });
    
    gsap.from('.p3 .source-code', {
      x: '-50%',
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
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
