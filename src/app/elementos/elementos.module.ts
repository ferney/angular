import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosRoutingModule } from './elementos-routing.module';
import { TextosComponent } from './components/textos/textos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextosComponent
  ],
  imports: [
    CommonModule,
    ElementosRoutingModule,
    FormsModule
  ]
})
export class ElementosModule { }
