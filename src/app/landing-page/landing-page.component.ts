import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // Array of image paths for easier handling
  imagePaths: string[] = [
    'assets/images/steel-sheet-image1.jpg',
    'assets/images/steel-coil-image2.jpg',
    'assets/images/steel-tube-image3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    // You can add additional initialization logic here if needed
    console.log('LandingPageComponent initialized.');
  }

  // Method to handle image load events
  // onImageLoad(imagePath: string): void {
  //   console.log(`${imagePath} has been loaded successfully.`);
  // }

  onImageLoad(imagePath: string): void {
    console.log(`Image loading started: ${imagePath}`);
    setTimeout(() => {
      console.log(`${imagePath} has been loaded successfully.`);
    }, 2000); // Adjust the timeout as needed
  }

  onImageError(imagePath: string): void {
    console.error(`Error loading image: ${imagePath}`);
  }

}
