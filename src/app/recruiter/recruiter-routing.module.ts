import { JobsComponent } from './jobs/jobs.component';
import { HeaderComponent } from '../header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterComponent } from '../recruiter/recruiter.component';
import { CreateJobComponent } from '../recrutier/create-job/create-job.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../auth/auth-guard.service';
const appRoutes : Routes = [
  {
path:'recruiter',component:RecruiterComponent,canActivate:[AuthGuardService],children:[
  {path:'',redirectTo: 'jobs', pathMatch: 'full'},
  {path:'jobs',component:JobsComponent},
  {path:'create_job',component:CreateJobComponent}
]
  }
]
@NgModule({
  imports: [
    // SharedModule,
    BrowserModule,
    RouterModule.forChild(appRoutes)
  ],
declarations:[
RecruiterComponent,
HeaderComponent,
JobsComponent,
CreateJobComponent
],

exports: [RouterModule]
})

export class RecruiterRoutes{}
