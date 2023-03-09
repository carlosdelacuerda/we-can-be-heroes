import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { HeroesInterface } from 'src/app/interfaces/heroes.interfaces';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss']
})
export class AccessFormComponent implements OnInit {

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  heroesList: HeroesInterface[];

  heroesForm: FormGroup;

  withID: boolean;
  colorButton: string;
  textInButton: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ){
    this.withID = false;
    this.input = {} as ElementRef;
    this.colorButton = 'primary';
    this.textInButton = 'Ver todos los héroes';
    this.heroesList = [];
    this.heroesForm = new FormGroup({
      heroeID: new FormControl
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.heroesForm = this.formBuilder.group({
      heroeID: ['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  changeInput(){
    this.input.nativeElement.value ? (this.textInButton = 'Buscar héroe por ID') && (this.colorButton = 'accent') && (this.withID = true) : (this.textInButton = 'Ver todos los héroes')  && (this.colorButton = 'primary') && (this.withID = false) ;
  }

  navigateTo() {
    if(this.withID && this.heroesForm.valid) {
      this.router.navigateByUrl('/detail/' + this.heroesForm.value.heroeID)
    } else if (!this.withID) {
      this.router.navigateByUrl('/list')
    }
  }
}
