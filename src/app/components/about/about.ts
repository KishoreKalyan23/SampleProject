import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private cdr:ChangeDetectorRef) {}

images: string[] = [
  '/images/Diabetes-Test.png',
  '/images/Pressure-Test.avif'
];

currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.detectChanges();
  }, 6000);
}
}
