import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { AccessFormComponent } from './access-form/access-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    CardComponent,
    AccessFormComponent,
    EditComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    CardComponent,
    AccessFormComponent,
    EditComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
