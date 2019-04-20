import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  userInfo = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
    */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });   
  }
  
  /*
  onSubmit(form: NgForm) {
    // console.log('form submitted.');
    console.log(form);
    console.log(form.value); // obj. { ... }
  }
  */
  
  // alternative
  onSubmit() {
    // console.log(this.signupForm);
    this.submitted = true;
    this.userInfo.username = this.signupForm.value.userData.username;
    this.userInfo.email = this.signupForm.value.userData.email;
    this.userInfo.secretQuestion = this.signupForm.value.secret;
    this.userInfo.answer = this.signupForm.value.questionAnswer;
    this.userInfo.gender = this.signupForm.value.gender;
    
    this.signupForm.reset();
  }
}
