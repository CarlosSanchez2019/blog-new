import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false
  name: string
  email: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
        if (auth) {
          this.isLogin = true
          this.name = auth.displayName
          this.email = auth.email

        }

      })

  }

  onClickLogOut() {
    this.authService.logout()
      .then(data => {
        this.router.navigate(['/'])
      })
  }
}
