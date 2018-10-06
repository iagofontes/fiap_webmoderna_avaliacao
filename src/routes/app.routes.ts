import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CadastroComponent } from '../components/cadastro/cadastro.component';
import { NotFoundComponent } from '../components/errors/notfoun.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "**", component: NotFoundComponent }
];