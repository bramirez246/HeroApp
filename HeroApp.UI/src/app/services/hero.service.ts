import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroDetails } from '../interfaces/hero-details';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //api url
  private endpoint = "SuperHero";

  constructor(private http:HttpClient) { }

  public getSuperHeroes() {
    
  }
}
