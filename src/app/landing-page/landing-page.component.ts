import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  // Lifecycle hook that runs when the component is initialized
  ngOnInit(): void {
    console.log('LandingPageComponent initialized.');
  }

  // Event handler for image load success
  onImageLoad(imagePath: string): void {
    console.log(`Image loading started: ${imagePath}`);
    setTimeout(() => {
      console.log(`${imagePath} has been loaded successfully.`);
    }, 2000); // Simulate loading delay
  }

  // Event handler for image load error
  onImageError(imagePath: string): void {
    console.error(`Error loading image: ${imagePath}`);
  }

  // Slide data for the second (Bootstrap) carousel
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

  // State for the second carousel's active slide (Bootstrap carousel)
  secondActiveSlide = 0;

  /**
   * Navigate to the next slide in the second (Bootstrap) carousel.
   */
  nextSecondSlide(): void {
    this.secondActiveSlide = (this.secondActiveSlide + 1) % this.slides.length;
    console.log('Next Slide in Second Carousel:', this.secondActiveSlide); // Debug log
  }

  /**
   * Navigate to the previous slide in the second (Bootstrap) carousel.
   */
  prevSecondSlide(): void {
    this.secondActiveSlide = (this.secondActiveSlide - 1 + this.slides.length) % this.slides.length;
    console.log('Previous Slide in Second Carousel:', this.secondActiveSlide); // Debug log
  }

  // Code for the first carousel has been commented out as it is no longer in use
  // activeSlide = 0;
  
  // nextSlide(): void {
  //   this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  //   console.log('Next Slide in First Carousel:', this.activeSlide); // Debug log
  // }

  // prevSlide(): void {
  //   this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  //   console.log('Previous Slide in First Carousel:', this.activeSlide); // Debug log
  // }

}
