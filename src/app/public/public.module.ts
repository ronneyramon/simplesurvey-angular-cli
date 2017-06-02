import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from "app/public/survey/survey.component";
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'survey/:id',
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
  declarations: [
    SurveyComponent,
    LayoutComponent
  ]
})
export class PublicModule { }
