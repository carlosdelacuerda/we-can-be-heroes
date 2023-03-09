import { Component, Input } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { HeroesInterface, DialogData } from 'src/app/interfaces/heroes.interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent {

  @Input('hero') hero: HeroesInterface;
  modalInfo: DialogData;

  constructor(
    private heroesService: HeroesService,
    private router: Router
    ){
      this.modalInfo = {
        title: '',
        text: '',
        button: false,
        id: 0
      }
      this.hero = {
        id: 0,
        name: '',
        img: ''
      }
    }
    
  edit() {
    this.router.navigate(['form/' + this.hero.id])
  }

  delete () {
    this.modalInfo = {
      title: 'Eliminar',
      text: '¿Está seguro de que desea eliminar a ' + this.hero.name + '?',
      button: true,
      id: this.hero.id
    }
    this.heroesService.openModal(this.modalInfo);
  }

}
