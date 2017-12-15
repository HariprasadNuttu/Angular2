import { AuthGuardService } from './auth/auth-guard.service';
import { RequestInterceptor } from './auth/request.service';
import { UserService } from './auth/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { NgModule,APP_INITIALIZER } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { Angular2SocialLoginModule } from "angular2-social-login";
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterRoutes } from './recruiter/recruiter-routing.module';
import { SharedModule } from './shared/shared.module';
import { TokenService } from './auth/token.service';
import { AppLoadService } from './auth/app-load.service';
// import { CreateJobComponent } from './recrutier/create-job/create-job.component';
// import { JobsComponent } from './recruiter/jobs/jobs.component';

export function init_app(appLoadService: AppLoadService) {
  return () => appLoadService.initializeApp();
}

export function get_settings(appLoadService: AppLoadService) {
  return () => appLoadService.getSettings();
}


// Social networking providers
let providers = {
  "google": {
    "clientId": "635812202374-lctnkmm77ek5k64nb96uto12jhptbesi.apps.googleusercontent.com"
  },
 //  "linkedin": {
 //    "clientId": "LINKEDIN_CLIENT_ID"
 //  },
 //  "facebook": {
 //    "clientId": "FACEBOOK_CLIENT_ID",
 //    "apiVersion": "<version>" //like v2.4
 //  }
};

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    BodyComponent,
    SignInComponent,
    // CreateJobComponent,
    // JobsComponent,
    // RecruiterComponent,
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    RecruiterRoutes,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    HttpModule,
    // SharedModule,
    HttpClientModule,Angular2SocialLoginModule,
    AlertModule.forRoot(),
    // modal
    ModalModule.forRoot()

  ],
  providers: [UserService,TokenService,AppLoadService,
    {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptor,multi:true},
  { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true },
  // { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppLoadService], multi: true },
  AuthGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }


// social login
Angular2SocialLoginModule.loadProvidersScripts(providers);
