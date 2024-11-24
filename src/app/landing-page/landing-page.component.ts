import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('LandingPageComponent initialized.');
  }

  onImageLoad(imagePath: string): void {
    console.log(`Image loading started: ${imagePath}`);
    setTimeout(() => {
      console.log(`${imagePath} has been loaded successfully.`);
    }, 2000); // Simulate loading delay
  }

  onImageError(imagePath: string): void {
    console.error(`Error loading image: ${imagePath}`);
  }

  slides = [
    {
      image: 'assets/images/steel-sheet-image1.jpg',
      alt: 'Steel Sheet',
      title: 'Steel Sheet',
      description: 'High-quality steel sheets for all your needs.'
    },
    {
      image: 'assets/images/steel-coil-image2.jpg',
      alt: 'Steel Coil',
      title: 'Steel Coil',
      description: 'Durable and flexible steel coils.'
    },
    {
      image: 'assets/images/steel-tube-image3.jpg',
      alt: 'Steel Tube',
      title: 'Steel Tube',
      description: 'Strong and reliable steel tubes.'
    }
  ];

  activeSlide = 0;

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    console.log('Next Slide:', this.activeSlide); // Debug log
  }

  prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    console.log('Previous Slide:', this.activeSlide); // Debug log
  }
}
