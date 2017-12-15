import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule,
  ]
})
export class SharedModule {}
