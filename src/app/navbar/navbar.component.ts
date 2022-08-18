import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../login/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver,private authService: AuthService) {}


  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      console.log("1"+this.loggedIn);
      this.loggedIn= true;
      console.log("2"+this.loggedIn);
      
    }
    else {
     this.loggedIn= false;
     console.log("3"+this.loggedIn);}
  }

  
  logoutUser(){
    this.authService.logout();
    location.reload();
  }
}
