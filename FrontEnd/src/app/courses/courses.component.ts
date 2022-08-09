import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  course= [
    {'id':1,'name':'Full Stack Web Development','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/FSD.jpg'},
    {'id':2,'name':'Artificial Intelligence','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/AI.jpg'},
    {'id':3,'name':'Blockchain Technology','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/img/BC.jpg'},
    
  ]
}
