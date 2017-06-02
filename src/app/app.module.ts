import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { AdminModule } from "app/admin/admin.module";

const shellRoutes: Routes = [
  // { path: '', redirectTo: 'admin/surveys', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PublicModule,
    AdminModule,
    RouterModule.forRoot(shellRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
