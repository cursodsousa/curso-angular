import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc'
import { auth } from './auth.config'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private oauthService:OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() { 
    this.initConfiguration();
  }

  initConfiguration(){
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthService.hasValidIdToken()){
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    })
  }

  login(){
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate([''])
  }

  getProfile(){
    return this.profile();
  }
}
