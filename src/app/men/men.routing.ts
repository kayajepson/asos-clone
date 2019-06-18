import { ModuleWithProviders }  from '@angular/core';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';


const menRoutes: Routes = [
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'men/:category',
    component: CategoryComponent
  },
  {
    path: 'men/item',
    component: ItemComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(menRoutes);
