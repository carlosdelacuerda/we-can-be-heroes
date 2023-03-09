import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesInterface, DialogData } from 'src/app/interfaces/heroes.interfaces';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  UrlId: string;
  hero: HeroesInterface;
  modalInfo: DialogData;
  formGroup: FormGroup;
  newHero: boolean;
  heroTitle: string;
  errorName: boolean;
  errorUrl: boolean;


  constructor( 
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private  heroesService: HeroesService,
    public router: Router
     ) {
      this.UrlId = '0';
      this.hero = {
        id: 0,
        name: '',
        img: ''
      }
      this.formGroup = this.formBuilder.group({
        name: '',
        img: '',
      });
      this.newHero = true;
      this.heroTitle = 'Crea un nuevo héroe';
      this.errorName = false;
      this.errorUrl
     }

  public ngOnInit() {
    const observer = {
      next: (hero) => {
        this.hero = hero;
        this.heroTitle = hero.name;
        this.buildForm();
      }
    }
    this.UrlId = this.route.snapshot.paramMap.get('id');
    if(this.UrlId != 'CrearHeroe') {
      this.newHero = false;
      this.heroesService.getAHeroById(+this.UrlId).subscribe( observer )
    } else {
      this.buildForm()
    }
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      name:[this.hero.name, [ Validators.required, Validators.minLength(3) ]],
      img:[this.hero.img, [ Validators.required, Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}') ]]
    });
  }

  sendInfo() {
    const heroe = this.formGroup.value;
    let observer
    if (this.UrlId === 'CrearHeroe') {
      observer = {
        next: () => {
          this.modalInfo = {
            title: 'Creado',
            text: 'Héroe creado con éxito',
            button: null,
            id: null
          }
        },
        error: (e) =>  {
          this.modalInfo = {
            title: 'Error',
            text: 'Se ha producido un error ' + e.status,
            button: null,
            id: null
          }
          this.heroesService.openModal(this.modalInfo);
        },
        complete: () => {
          this.heroesService.openModal(this.modalInfo);
          this.router.navigate(['/list'])
        }
      }
      this.hero = {
        id: +this.UrlId,
        name: heroe.name,
        img: heroe.img
      }
      this.heroesService.updateHero(this.hero).subscribe( observer )
    } else {
      observer = {
        next: () => {
          this.modalInfo = {
            title: 'Actualizado',
            text: 'Héroe actualizado con éxito',
            button: null,
            id: null
          }
        },
        error: (e) =>  {
          this.modalInfo = {
            title: 'Error',
            text: 'Se ha producido un error ' + e.status,
            button: null,
            id: null
          };
          this.heroesService.openModal(this.modalInfo);
        },
        complete: () => {
          this.heroesService.openModal(this.modalInfo);
          this.router.navigate(['/list'])
        }
      }
        this.hero = {
        id: heroe.id,
        name: heroe.name,
        img: heroe.img
        }
        this.heroesService.createAHero(this.hero).subscribe( observer )
      }
    }
}
