import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent,LeftmenuComponent, HeaderComponent],
 
  imports: [
    CommonModule,
  ],
   
 exports:[LayoutComponent]


})
export class LayoutModule { }
