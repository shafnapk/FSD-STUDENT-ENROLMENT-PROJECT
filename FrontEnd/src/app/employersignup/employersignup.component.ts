import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-employersignup',
  templateUrl: './employersignup.component.html',
  styleUrls: ['./employersignup.component.css']
})
export class EmployersignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  showModal: boolean=false;
  serverErrorMessages: string;

  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.userService.postEmployer(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 12000);
        this.resetForm(form);
        alert('Registered')
        this.router.navigate(['/employersignin']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );

  }
  resetForm(form: NgForm) {
    this.userService.selectedEmployer = {
    fullName: '',
    email: '',
    password:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
