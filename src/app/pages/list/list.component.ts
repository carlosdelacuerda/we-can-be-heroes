import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroesInterface } from 'src/app/interfaces/heroes.interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterContentInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageEvent: PageEvent;
  allHeroes: HeroesInterface[];
  viewHeroes: HeroesInterface[];
  filterHeroes: HeroesInterface[];
  searchedHeroe$: Subject<string>;
  numberOfPages: number;
  firstCard: number;
  currentPage: number;
  pageSize: number;
  heroName: string;
  manageSubs: any;
  pageIndex: number;

  constructor(public heroesService: HeroesService) {
    this.allHeroes = [];
    this.viewHeroes = [];
    this.filterHeroes = [];
    this.numberOfPages = 0;
    this.firstCard = 0;
    this.currentPage = 0;
    this.pageSize = 3;
    this.searchedHeroe$ = new Subject<string>();
    this.heroName = '';
  }

  ngAfterContentInit(): void {
    this.getHeroesList();
  }

  getHeroesList() {
    this.heroesService.getAllHeroes().subscribe(heroes => {
          this.allHeroes = heroes;
          this.numberOfPages = heroes.length;
          this.cutList(0, 3)
        })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.numberOfPages = e.length;
    this.pageSize = e.pageSize;
    this.cutList(e.pageIndex*3, e.pageIndex*3+3)
  }

  cutList(init, end) {
    if(this.heroName.length) {   
      this.viewHeroes = this.filterHeroes.slice(init, end);
    } else {
      this.viewHeroes = this.allHeroes.slice(init, end);
    } 
  }

  searchHero(e){
    this.paginator.pageIndex = 0;
    this.cutList(0, 3)
    this.searchedHeroe$.next(this.heroName)
  }

  searchHeroe$(): void {
    this.manageSubs = this.searchedHeroe$.subscribe(search => {
      this.filterHeroes = this.allHeroes.filter(name => name.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      this.viewHeroes = this.filterHeroes.slice(0,3);
    });
  }

  inactiveSubscribe() {
    this.manageSubs.unsubscribe()
  }
}
