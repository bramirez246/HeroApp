import { Component, Input } from '@angular/core';
import { HeroDetails } from '../interfaces/hero-details';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent {
  @Input() heroList!: HeroDetails;
}
