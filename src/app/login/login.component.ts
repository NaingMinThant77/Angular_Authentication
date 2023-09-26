import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  formData!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl("")
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("userName: " + this.userName);
    console.log("password: " + this.password);

    this.authService.login(this.userName, this.password).subscribe(data => {
      console.log("Login Success: " + data);

      if(data) this.router.navigate(['/home']);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }
}
