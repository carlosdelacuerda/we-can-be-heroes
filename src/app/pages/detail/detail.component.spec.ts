import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditComponent } from 'src/app/components/edit/edit.component';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DetailComponent,
        EditComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
      ],
      providers: [
        {provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1,
              },
            },
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
