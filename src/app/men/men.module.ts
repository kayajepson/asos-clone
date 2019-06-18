import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men.component'
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './men.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  declarations: [
    MenComponent,
    CategoryComponent,
    ItemComponent],
  exports: [
    MenComponent,
    CategoryComponent,
    ItemComponent
  ]
})
export class MenModule { }
