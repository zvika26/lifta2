import {Component, OnInit, ViewChild} from '@angular/core';
import {Lecture} from "../lecture.model";
import {LecturesService} from "../../services/lectures.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-lecture',
  templateUrl: './new-lecture.component.html',
  styleUrls: ['./new-lecture.component.css']
})
export class NewLectureComponent implements OnInit {

  lecture: Lecture = new Lecture('', "", 1, 0);
  @ViewChild('customerForm') customerForm: NgForm;
  constructor(private lecturesService: LecturesService,
              private router: Router) { }

  ngOnInit() {
  }

  addNewLecture(){
    this.lecturesService.addLecture("test", 5,123);
  }



}
