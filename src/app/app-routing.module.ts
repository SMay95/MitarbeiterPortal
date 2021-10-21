import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbschlussseiteComponent } from './_Page/abschlussseite/abschlussseite.component';
import { ErfassungComponent } from './_Page/erfassung/erfassung.component';
import { HilfeseiteComponent } from './_Page/hilfeseite/hilfeseite.component';
import { LoginseiteComponent } from './_Page/loginseite/loginseite.component';


const routes: Routes = [
 
  { path: 'erfassung', component: ErfassungComponent},
  { path: 'login',component: LoginseiteComponent},
  { path: 'abschluss', component: AbschlussseiteComponent},
  { path: 'hilfe', component: HilfeseiteComponent},
  { path: '',   redirectTo: 'erfassung', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
