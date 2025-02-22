import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(
    private router: Router, 
    private loginService: AuthgoogleService
  ){}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
    this.loginService.login();
  }

  isLoggedIn() : boolean{ 
    const dadosGoogle = this.loginService.getLoggedProfile();
    console.log("Dados Google: ", dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }

}
