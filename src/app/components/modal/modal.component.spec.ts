import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [ HttpClientModule ],
      providers: [ 
          { 
          provide: MatDialogRef,
          useValue: []
           }, 
          { 
          provide: MAT_DIALOG_DATA, 
          useValue: [] 
          }
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
