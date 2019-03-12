import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step8Component } from './step8/step8.component';
import { Step7Component } from './step7/step7.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path: 'step1', component: Step1Component},
  {path: 'step2', component: Step2Component},
  {path: 'step3', component: Step3Component},
  {path: 'step4', component: Step4Component},
  {path: 'step5', component: Step5Component},
  {path: 'step6', component: Step6Component},
  {path: 'step7', component: Step7Component},
  {path: 'step8', component: Step8Component}






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
