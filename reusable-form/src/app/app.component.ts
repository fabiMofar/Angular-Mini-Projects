import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-form';
  form = new FormGroup({
    displayName: new FormControl('')
  });

  submit() {
    console.log(this.form.value)
    this.form.reset()
  }
}
