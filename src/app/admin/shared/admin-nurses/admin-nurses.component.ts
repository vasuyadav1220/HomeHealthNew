import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-admin-nurses',
  templateUrl: './admin-nurses.component.html',
  styleUrls: ['./admin-nurses.component.css']
})
export class AdminNursesComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private service:AllService,
    private route:Router
  ) {}

  adminId:any;
  ngOnInit(): void {
    const adminIdString = localStorage.getItem('id');
    this.adminId = adminIdString ? parseInt(adminIdString, 10) : null;

    console.log(this.adminId);
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.service.adnursesForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
        console.log('form added',res)
        this.route.navigate(["/superAdmin/view_nurses"]);
       });
    }
  }
}
