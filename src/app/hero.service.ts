import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // trong service gọi service khác
    this.messageService.add(`${new Date().toLocaleString()}. Get Heroes List `);
    return of(HEROES);
  }
  constructor(private messageService: MessageService) {}
}
