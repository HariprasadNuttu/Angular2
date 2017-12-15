import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
const appRoutes : Routes = [
  {
    path:'',redirectTo:'/sign_in',pathMatch:'full'},
    {
    path:'sign_in',component:SignInComponent,
  }
]
@NgModule({
  declarations:[
    // SignInComponent
  ],
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutes{

}
