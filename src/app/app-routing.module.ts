import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'detail/:id', component: DetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
