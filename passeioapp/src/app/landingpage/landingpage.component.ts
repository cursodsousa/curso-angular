import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../auth-google.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router, private loginService: AuthGoogleService){}

  logarComGoogle(){
    this.loginService.login();
  }

  isLoggedIn(){
    this.profile = this.loginService.getProfile();
    console.log(this.profile)
    return !!this.profile;
  }

  navegar(){
    this.router.navigate(['/paginas/galeria'])
  }

}
