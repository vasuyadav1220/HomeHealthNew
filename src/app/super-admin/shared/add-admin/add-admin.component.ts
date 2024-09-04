import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  myForm!: FormGroup;
  ck:boolean=false;

  constructor(private fb: FormBuilder,
    private route:Router,
    private service:AllService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
     this.ck = true;
     this.service.postDoctors(this.myForm.value).subscribe((res:any)=>{
      console.log('form added',res)
     })
    return
    }
    //  else {
    //     console.log("Pataient data",this.myForm.value)
    //     this.service.postDoctors(this.myForm.value).subscribe({
    //       next: (res)=>{
    //           this.route.navigate(["/superAdmin/view_admins"])
    //       },
    //       error: (err)=>{console.log(err)}
    //       })


    //   this.myForm.markAllAsTouched();
    // }
  }
}
