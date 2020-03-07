import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string;
  password:string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithGoogle(){
    this.authService.loginWitGoogle()
      .then(data => {
        this.router.navigate(['/admin'])
      })
      .catch(err => console.log(err))

  }
  signInWithEmailAndPassword(){
    this.authService.loginWithEmailAndPassword(this.email,this.password)
      .then(data => {
        console.log("Ok",data)
      })
      .catch(err => {
        console.log("error", err)
      })
  }
}
