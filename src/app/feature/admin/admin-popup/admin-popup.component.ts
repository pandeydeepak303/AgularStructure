import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/sevice/admin.service';

@Component({
  selector: 'app-admin-popup',
  templateUrl: './admin-popup.component.html',
  styleUrls: ['./admin-popup.component.css']
})
export class AdminPopupComponent {
  
  data: any = {
    UserName: '',
    Password: ''
  };
  constructor(private router: Router, private AccountService : AdminService, private toster:ToastrService){
  }

  ngOnInit(): void {
   
  }

  onSubmit() {debugger
    this.AccountService.login(this.data).subscribe(
      (data: any) => {
        if (data.statusCode === 200) {
         debugger;
         this.data.UserName = '';
         this.data.Password = '';
         this.router.navigate(['/Admin']);
          this.toster.success('Login Successful', 'Success'); 
        } else if (data.statusCode === 401) {

          this.toster.error('Invalid credentials. Please try again.', 'Error'); 
        } else if (data.statusCode === 403) {

          this.toster.warning('You do not have permission to access this resource.', 'Warning'); 
        } else if (data.statusCode === 404) {

          this.toster.info('The requested resource was not found'); 
        } else {
          this.toster.error('Unexpected error. Please try again later.', 'Error');
        }
      },
      (error) => {
        console.error('API call error:', error);
      }
    );
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

}
