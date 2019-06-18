import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WomenModule } from './women/women.module'
import { MenModule } from './men/men.module'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    WomenModule,
    MenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
