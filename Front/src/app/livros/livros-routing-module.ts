import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivro } from './cad-livro/cad-livro';

const routes: Routes = [
  {path: 'cadastro', component: CadLivro}
  {path: 'LIstra', component: listar}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
