import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ListComponent } from './list/list.component';
import { FilterComponent } from '../components/filter/filter.component';
import { DetailComponent } from './detail/detail.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    FilterComponent,
    DetailComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{ provide: MatPaginatorIntl }]
})
export class PagesModule { }
