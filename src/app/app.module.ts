import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPopupComponent } from './feature/admin/admin-popup/admin-popup.component';
import { UserComponent } from './feature/user/user/user.component';
import { UserPopupComponent } from './feature/user/user-popup/user-popup.component';
import { HomeComponent } from './feature/home/home.component';
import { AdminComponent } from './feature/admin/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    AdminComponent,
    UserComponent,
    AdminPopupComponent,
    UserPopupComponent,  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminComponent,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right',
      preventDuplicates: true, 
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
