import { Component, OnInit } from '@angular/core';
// import {Hero} from '../Hero';
import {Formsmodule} from '@angular/forms';
import {HEROES} from '../mock-heroes';
//import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//heroes=HEROES;
selectedHero:Hero;
 heroes: Hero[];
// onSelect(hero:Hero):void{
// this.selectedHero=hero;
//}
hero:Hero={
id:1,
name:'windstrom'
}
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
   onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
export class appcomponent
{
  name='heroes';
}
