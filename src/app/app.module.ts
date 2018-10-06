import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {MatToolbar} from '@angular/material';
import { MaterialModule } from '../components/material-module/material.module';
import { MatToolbar, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './../components/menu/menu.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes/app.routes';

import { HomeComponent } from '../components/home/home.component';
import { CadastroComponent } from '../components/cadastro/cadastro.component';
import { NotFoundComponent } from '../components/errors/notfoun.component';

import { SubLista } from '../filters/sublista.filter';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent,
    SubLista
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MaterialModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
