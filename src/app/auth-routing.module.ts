import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthInterceptor } from './shared/okta/auth.interceptor';

const oktaConfig = {
  issuer: 'https://dev-88219361.okta.com/oauth2/default',
  clientId: '0oa7osdvmwTbvDweq5d7',
  redirectUri: window.location.origin+'/callback',
  scopes: ['openid', 'profile'],
  pkce:false
};

const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
