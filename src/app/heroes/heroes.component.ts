import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  currentItem = 'Vinh Binding';

  items = ['item1', 'item2', 'item3', 'item4'];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    // sử dụng subscribe để theo dõi cái observable getHeroes ( observable là 1 object bị theo dõi)
    // nếu cái observable getHeroes bên service có bất kì thay đổi nào
    // nó sẽ update cái mới nhất qua thằng updatedHeroes, nhờ vào sự kiện subscribe
    // sau đó gán cái updatedHeroes này cho mảng heroes được khai báo ở trên
    // đây là luồn chạy bất đồng bộ khi call api lấy data
    this.heroService.getHeroes().subscribe((updatedHeroes) => {
      this.heroes = updatedHeroes;
      console.log(`this.heroes =  ${JSON.stringify(this.heroes)}`);
    });
  }
  ngOnInit(): void {
    //It's a good place to put initialization logic
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(hero);
    this.messageService.add(`HeroesComponent: Selected hero name=${hero.name}`);
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
