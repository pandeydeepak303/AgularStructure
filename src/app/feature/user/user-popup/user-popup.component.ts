import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.css']
})
export class UserPopupComponent {

constructor(private router:Router){
 }

  navigateToAdmin() {
    this.router.navigate(['/Admin']);
  }
  navigateToUser() {
    this.router.navigate(['/User']);
  }

  navigateToAminPopup() {
    this.router.navigate(['/AdminPopup']);
  }

  navigateToHome(){

    this.router.navigate(['/Homeww'])
  }


  navigateToUserPopu(){

    this.router.navigate(['/UserPopup'])
  }

}
