import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'men',
    component: MenComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
