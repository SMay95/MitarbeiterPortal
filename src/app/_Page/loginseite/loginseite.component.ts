import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/_interface/ilogin';

@Component({
  selector: 'app-loginseite',
  templateUrl: './loginseite.component.html',
  styleUrls: ['./loginseite.component.scss']
})
export class LoginseiteComponent implements OnInit {
  
  public LoginData!: Ilogin;
  
  constructor(private router: Router) { 
    this.LoginData = {

    };
  }

  ngOnInit(): void {

  }
    
  Login(value: any): void{ 
    console.log(this.LoginData.Token);
    console.log(this.LoginData.Geburtstag);
  }

  GoBack(){
    //Routing to the Detailentry
    this.router.navigate(['/erfassung']);
  }

}
