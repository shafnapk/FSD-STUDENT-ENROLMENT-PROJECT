import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {
  userDetails











  
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        });
        
  }

// image upload

image

  url: any; //Angular 11, for stricter type
	msg = "";
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		var mimeType = event.target.files[0].type;
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
    
	}




  
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/']);
  }
  onSubmit(form: NgForm) {    
    const model={
    
      fullName: this.userDetails.fullName,
      email:this.userDetails.email,
      phone:form.controls['phone'].value,
      address:form.controls['address'].value,
      qualification:form.controls['qualification'].value,
      passout:form.controls['passout'].value,
      skills:form.controls['skills'].value,
      employmentStatus:form.controls['employmentStatus'].value,
      techtraining:form.controls['techtraining'].value,
      course:form.controls['course'].value,
      image:this.url,
      exitexammark:0,
      status:2
      };

    this.userService.studEnrollment(this.userDetails._id,model).subscribe((data)=>{
      console.log(data)
      alert('data modified')
      this.router.navigate(['studentprofile']);
    })
  }
}
