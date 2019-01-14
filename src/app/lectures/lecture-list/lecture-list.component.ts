import { Component, OnInit } from '@angular/core';
import {Student} from "../../students/student.model";
import {Lecture} from "../lecture.model";
import {LecturesService} from "../../services/lectures.service";

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  lectures: Lecture[];
  totalStudentsInAllLecturesInRow : Student[];

  constructor(private lectureService: LecturesService) {
    // this.lectures = this.lectureService.getLectures();
  }

  ngOnInit() {
    this.lectures = this.lectureService.getLectures();
  }

}
