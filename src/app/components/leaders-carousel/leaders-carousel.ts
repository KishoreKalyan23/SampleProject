import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaders-carousel',
  imports: [CommonModule],
  templateUrl: './leaders-carousel.html',
  styleUrl: './leaders-carousel.css',
})
export class LeadersCarousel {

   testimonials = [
    {
      img: 'images/MahatmaGandhi.jpg',
      name: 'Mahatma Gandhi',
      quote: 'It is health that is real wealth and not pieces of gold and silver.'
    },
    {
      img: 'images/SwamiVivekananda.jpg',
      name: 'Swami Vivekananda',
      quote: 'Confidence and Hard-work is the only medicine to kill a disease called failure!'
    },
    {
      img: 'images/APJ_Abdulkalam.jpeg',
      name: 'Dr. APJ Abdul Kalam',
      quote: 'Confidence and Hard-work is the only medicine to kill a disease called failure!'
    },
    {
      img: 'images/MotherTeresa.jpeg',
      name: 'Mother Teresa',
      quote: 'We shall never know all the good that a simple smile can do.'
    }
  ];

}
