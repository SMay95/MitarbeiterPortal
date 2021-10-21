import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErfassungComponent } from './_Page/erfassung/erfassung.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './materials/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZusammenfassungComponent } from './_Page/zusammenfassung/zusammenfassung.component';
import { LOCALE_ID } from '@angular/core';
import de from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ImpfgenesenstatusComponent } from './_Page/impfgenesenstatus/impfgenesenstatus.component';
import { AbschlussseiteComponent } from './_Page/abschlussseite/abschlussseite.component';
import { LoginseiteComponent } from './_Page/loginseite/loginseite.component';
import { HilfeseiteComponent } from './_Page/hilfeseite/hilfeseite.component';
registerLocaleData(de);


@NgModule({
  declarations: [
    AppComponent,
    ErfassungComponent,
    ZusammenfassungComponent,
    ImpfgenesenstatusComponent,
    AbschlussseiteComponent,
    LoginseiteComponent,
    HilfeseiteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue:"de-de"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
