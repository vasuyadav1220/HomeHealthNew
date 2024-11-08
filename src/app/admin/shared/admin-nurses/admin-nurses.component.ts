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

  userId:any
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    
    console.log( 'admin id', this.userId);
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      doctorId:[this.userId]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.service.adnursesForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
        console.log('form added',res)
        this.route.navigate(["/Admin/view_nurses"]);
       });
    }
  }
}
