import { ModuleWithProviders }  from '@angular/core';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomenComponent } from './women.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

const womenRoutes: Routes = [
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'women/:category',
    component: CategoryComponent
  },
  {
    path: 'women/item',
    component: ItemComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(womenRoutes);
