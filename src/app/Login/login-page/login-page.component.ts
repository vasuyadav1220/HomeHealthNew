import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  loginForm!:FormGroup;
  ck: boolean = false;
  constructor (
  private fb:FormBuilder,
  private router:Router,
  private service:AllService,
){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
}

addPatients() {
  if (this.loginForm.invalid) {
    this.ck = true;
    return
} 
else{
  console.log("Pataient data",this.loginForm.value)
  this.service.superAdminLogin(this.loginForm.value).subscribe({
    next: (res)=>{
      if (res.role === 'superadmin' ){
        sessionStorage.setItem('token',res.token)
        // this.snackBar.openSnackBar(`succesfully Register patient !`);
        this.router.navigate(["/superAdmin/home"])
      }
      console.log("P Data",res)
     
    },
    error: (err)=>{console.log(err)}
    })
}
}


onChanges(data: string) {
  if (data === 'superadmin') { 
    this.loginForm.controls['email'].setValue('superadmin@gmail.com');
    this.loginForm.controls['password'].setValue('superadmin');
  } else if (data === 'doctor') { 
    this.loginForm.controls['email'].setValue('mayank@gmail.com');
    this.loginForm.controls['password'].setValue('mayank@123');
  }
  else if (data === 'nurse') {
    // this.form.controls['mobileNumber'].setValue('+919644605330');
    this.loginForm.controls['email'].setValue('nurse@gmail.com');
    this.loginForm.controls['password'].setValue('nurse');
    } 
    else if (data === 'patient') {
      // this.form.controls['mobileNumber'].setValue('+919644605330');
      this.loginForm.controls['email'].setValue('patient@gmail.com');
      this.loginForm.controls['password'].setValue('patient');
      } 
}

showPassword: boolean = false;
togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

}
