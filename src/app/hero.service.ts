import { Injectable, OnInit } from '@angular/core';
import {Observable, of} from "rxjs"
import { Hero } from './hero';
import { HEROES } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements OnInit{

  ngOnInit(): void {
      this.getHeroes()
  }

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES)
    return heroes;
  }

  constructor() { }
}
