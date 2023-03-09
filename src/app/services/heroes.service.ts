import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { HeroesInterface, DialogData } from '../interfaces/heroes.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  urlBase: string;
  public subjectModal: BehaviorSubject<DialogData>  = new BehaviorSubject({
    title: '',
    text:'',
    button: true,
    id: 0
  });

  constructor(
    private http: HttpClient,
    public router: Router
    ) {
    this.urlBase = 'http://demo2552582.mockable.io/heroes';
   }

  public getAllHeroes(): Observable<HeroesInterface[]> {
     return this.http.get<HeroesInterface[]>(this.urlBase);
  }

  public getAHeroById(id: number): Observable<HeroesInterface> {
    return this.http.get<HeroesInterface>(this.urlBase + '/' + id);
  }

  public deleteAHeroById(id: number): Observable<any> {
    this.router.navigate([''])
    return this.http.delete(this.urlBase + '/' + id);
  }

  public createAHero(hero: HeroesInterface): Observable<HeroesInterface> {
    return this.http.post<HeroesInterface>(this.urlBase, hero);
  }

  public updateHero(hero: HeroesInterface): Observable<HeroesInterface> {
    return this.http.put<HeroesInterface>(this.urlBase, hero);
  }

  public openModal(content: DialogData): Observable<any> { 
    this.subjectModal.next(content);
    return null;
  }
  
}
