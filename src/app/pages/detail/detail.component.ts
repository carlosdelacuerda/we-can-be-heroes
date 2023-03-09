import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroesInterface } from 'src/app/interfaces/heroes.interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  id: string;
  hero: HeroesInterface;

  constructor
  (
    private route: ActivatedRoute,
    private  heroesService: HeroesService
  ) {
    this.id = '0';
    this.hero = {
      name: 'Héroe no encontrado',
      id: 0,
      img: ''
    }

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.heroesService.getAHeroById(+this.id).subscribe(hero => this.hero = hero)
  }

}
