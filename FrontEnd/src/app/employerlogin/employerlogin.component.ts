import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employerlogin',
  templateUrl: './employerlogin.component.html',
  styleUrls: ['./employerlogin.component.css']
})
export class EmployerloginComponent implements OnInit {

  constructor(private router:Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.router.navigate(['searchstud'])
  }
signup(){
  this.router.navigate(['employersignup'])
}
}
