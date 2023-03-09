import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from 'src/app/pages/form/form.component';

import { AccessFormComponent } from './access-form.component';

describe('AccessFormComponent', () => {
  let component: AccessFormComponent;
  let fixture: ComponentFixture<AccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AccessFormComponent,
        MatFormField,
        MatLabel,
        FormComponent
       ],
       imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
