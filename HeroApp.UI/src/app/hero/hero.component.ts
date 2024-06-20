import { Component } from '@angular/core';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroDetailsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
