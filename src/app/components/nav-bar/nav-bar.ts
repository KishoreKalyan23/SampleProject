import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import { About } from '../about/about';
import { LeadersCarousel } from '../leaders-carousel/leaders-carousel';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-nav-bar',
  imports: [HomePage, About, LeadersCarousel, Contact],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

}
