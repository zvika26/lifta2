import {Component, Input, OnInit} from '@angular/core';
import {Lecture} from "../lectures/lecture.model";
import {LecturesService} from "../services/lectures.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-school-hour',
  templateUrl: './school-hour.component.html',
  styleUrls: ['./school-hour.component.css']
})
export class SchoolHourComponent implements OnInit {
  lectures: Lecture[];
  @Input() specificDay: string;
  @Input() hour: number;

  constructor(private lectureService: LecturesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lectures = this.lectureService.getLecturesByDayAndHour(this.specificDay, this.hour);
  }

}
