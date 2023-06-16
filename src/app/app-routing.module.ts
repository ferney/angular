import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextosComponent } from 'src/app/elementos/components/textos/textos.component';

const routes: Routes = [
{
path:'elementos',
loadChildren: ()=> import('./elementos/elementos.module').then(m=>m.ElementosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
