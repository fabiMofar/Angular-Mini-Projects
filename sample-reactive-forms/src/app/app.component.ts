import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    roleId: [1, Validators.required]
  })

  isSubmitted : boolean = false;
  roles = [
    {id : 1, title : 'Developer'},
    {id : 2, title : 'HR'},
    {id : 3, title : 'Assistant'}
  ]


  constructor(
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
      this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
        console.log('Send API Request and Update Role', roleId)
      })
  }

  onSubmit(): void {
    console.log(
      this.registerForm.value,
      this.registerForm.invalid
    );

    this.isSubmitted = true
  }
}
