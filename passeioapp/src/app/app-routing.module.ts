import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasModule } from './categorias/categorias.module';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { 
    path: 'paginas', 
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) 
  },
  {
    path: '',
    component: LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
