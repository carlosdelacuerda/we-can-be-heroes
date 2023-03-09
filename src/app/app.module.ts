import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    MatDialog,
    LoadingInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: LoadingInterceptor,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: false}
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
