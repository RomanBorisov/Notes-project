import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule
  ]
})
export class SidebarModule { }
