import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [
        HttpClientTestingModule,
        MatIconModule,
        RouterModule
      ],
      providers: [ {provide: ActivatedRoute, useValue: EditComponent} ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
