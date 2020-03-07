import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string
  password:string


  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmitSignUp(){
    this.authService.register(this.email, this.password)
      .then(data => {
        Swal.fire(`Registro realizado con éxito`)
        
      })
      .catch(err => Swal.fire('Algo salió mal'))

  }

  

}
