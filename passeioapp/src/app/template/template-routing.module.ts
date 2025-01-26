import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categorias',
        pathMatch: 'full',
        data: { titulo: 'Categorias', subTitulo: 'Realize o cadastro de novas categorias' },
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path: 'lugares',
        pathMatch: 'full',
        data: { titulo: 'Lugares', subTitulo: 'Realize o cadastro de novas localizações' },
        loadChildren: () => import('../lugares/lugares.module').then(m => m.LugaresModule)
      },
      {
        path: 'galeria',
        pathMatch: 'full',
        data: { titulo: 'Lista de Lugares Legais', subTitulo: 'Descubra os melhores lugares para explorar e se divertir' },
        loadChildren: () => import('../galeria/galeria.module').then(m => m.GaleriaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
