import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ConsultaComponent } from './consulta/consulta.component';

export const routes: Routes = [
    { path: 'cadastro', component: CrudComponent },
    { path: 'consulta', component: ConsultaComponent }
];
