import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['',Validators.required],
      lastname: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      gender: ['', Validators.required],
      ethnicity: ['',Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      instruction: ['',Validators.required],
      MRNnumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      homePhone: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      mobilePhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otherPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      contactName: ['',Validators.required],
      phoneOne: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      phoneTwo: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      emergencyEmail: ['',[Validators.required, Validators.email]],
      language: ['',Validators.required],
      image: ['', Validators.required],
      comments: ['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
