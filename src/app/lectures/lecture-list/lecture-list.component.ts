import { Component, OnInit } from '@angular/core';
import {Student} from "../../students/student.model";
import {Lecture} from "../lecture.model";
import {LecturesService} from "../../services/lectures.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  private lecturesSub: Subscription;
  lectures: Lecture[] = [];

  totalStudentsInAllLecturesInRow : Student[];

  constructor(private lectureService: LecturesService) {
  }

  ngOnInit() {
    this.lectureService.getLectures();
    this.lecturesSub = this.lectureService.getUpdatedLecturesListener()
      .subscribe((lectures: Lecture[]) =>{
        this.lectures = lectures;
      });
    console.log('lectures after init: ' + this.lectures + this.lectures.values());
  }

}
