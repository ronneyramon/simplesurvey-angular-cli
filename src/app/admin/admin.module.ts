import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SurveyComponent } from './survey/survey.component';
import { Routes, RouterModule } from "@angular/router";
import { SurveyEditorComponent } from "app/admin/survey/survey.editor.component";

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'surveys/:id',
        component: SurveyComponent
      }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [LayoutComponent, SurveyComponent, SurveyEditorComponent]
})
export class AdminModule { }
