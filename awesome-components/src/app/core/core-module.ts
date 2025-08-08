import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule, Header, SharedModule
  ],
  exports: [
    Header
  ]
})
export class CoreModule { }
