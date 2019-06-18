import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WomenComponent} from './women.component'
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './women.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    WomenComponent,
    CategoryComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [WomenComponent],
  exports: [
    WomenComponent,
    CategoryComponent,
    ItemComponent 
  ]
})
export class WomenModule { }
