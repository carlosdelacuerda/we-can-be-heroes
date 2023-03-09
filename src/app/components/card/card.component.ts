import { Component, Input } from '@angular/core';
import { HeroesInterface } from 'src/app/interfaces/heroes.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() hero: HeroesInterface;

  constructor(){
    this.hero = {
      name: '',
      id: 0,
      img: ''
    }
  }

}
