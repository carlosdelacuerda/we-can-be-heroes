import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HeroesService } from './services/heroes.service';
import { DialogData } from './interfaces/heroes.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'we-can-be-heroes';

  showLoading$: Observable<boolean>;
  showLoading: boolean;
  modalTitle: string;
  modalText: string;
  subscription: any;
  observable$: Observable<DialogData> = this.heroesService.subjectModal.asObservable();

  constructor(
    public loadingInterceptor: LoadingInterceptor,
    public dialog: MatDialog,
    public heroesService: HeroesService
  ){
    this.showLoading$ = new Observable;
    this.showLoading = false;
    this.modalTitle = '';
    this.modalText = '';
  }

  ngOnInit(): void {
    this.observable$.subscribe((data: DialogData) => this.openDialog(data))
    this.dialog.closeAll()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
          this.loadingInterceptor.showLoading$.subscribe(state => this.showLoading = state)
    });
  }

  openDialog(data): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      height: '500px',
      data: {title: data.title, text: data.text, button: data.button, id: data.id}
    });
  }
}
