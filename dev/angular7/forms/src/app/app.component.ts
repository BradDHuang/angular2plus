import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Tom', 'Jerry'];
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'username': new FormControl(null, Validators.required),
      // 'email': new FormControl(null, [Validators.required, Validators.email]),
      'userData': new FormGroup({
        // 'username': new FormControl(null, Validators.required),
        // 'username': new FormControl(null, [Validators.required, this.forbiddenNames]), // ERR!
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'), // default value.
      'hobbies': new FormArray([])
    });
  }
  
  onSubmit() {
    console.log(this.signupForm);
  }
  
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
