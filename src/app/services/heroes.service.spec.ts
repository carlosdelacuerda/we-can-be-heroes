import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { HeroesInterface } from '../interfaces/heroes.interfaces';

describe('HeroesService', () => {
  let injector: TestBed;
  let service: HeroesService;
  let httpMock: HttpTestingController;
  let heroesInterface: HeroesInterface;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]
    });
    injector = getTestBed();
    service = injector.inject(HeroesService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

describe('#getHeroes', () => {
  it('devuelve en observable el listado de heroes>', () => {
    const dummyHeroes = [heroesInterface, heroesInterface];
    service.getAllHeroes().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyHeroes);
    });

    const req = httpMock.expectOne(`${service.urlBase}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyHeroes);
    });
  });

});