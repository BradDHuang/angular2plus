import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
        // 'email': new FormControl(null, [Validators.required, Validators.email])
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male'), // default value.
      'hobbies': new FormArray([])
    });
    /*
    this.signupForm.valueChanges.subscribe(
      (val) => console.log(val)
    );
    */
    /*
    this.signupForm.statusChanges.subscribe(
      (s) => console.log(s)
    );
    */
    /*
    this.signupForm.patchValue({
      'userData': {
        'username': 'Tom'
      }
    });
    */
  }
  
  onSubmit() {
    console.log(this.signupForm);
    
    // this.signupForm.reset({ 'gender': 'male' });
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
  
  // Async
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 't@t.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    
    return promise;
  }
}
