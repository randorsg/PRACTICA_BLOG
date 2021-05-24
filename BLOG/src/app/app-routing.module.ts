import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'new', component: FormularioComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
