import {Component, OnInit} from '@angular/core';
import {LecturesService} from "../../services/lectures.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Lecture} from "../lecture.model";
import {StudentsService} from "../../services/students.service";
import {Student} from "../../students/student.model";

@Component({
  selector: 'app-new-lecture',
  templateUrl: './new-lecture.component.html',
  styleUrls: ['./new-lecture.component.css']
})
export class NewLectureComponent implements OnInit {

  private mode = "create";
  private lectureId: string;
  private existLecture: Lecture;
  private students: Student[];

  // @ViewChild('customerForm') customerForm: NgForm;
  constructor(private lecturesService: LecturesService,
              private studentsService: StudentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  this.students = this.studentsService.getStudentsList();
  /**********
   *
   * */
  // console.log("00" + this.students[1].name);

    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has("lectureId")) {
        this.mode = "edit";
        this.lectureId = paramMap.get("lectureId");
        this.existLecture = this.lecturesService.getLecture(this.lectureId);
      }else{
        this.mode = "create";
        this.lectureId = null;
      }

    })
  }

  onSaveLecture(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    if (this.mode === "create"){
      this.lecturesService.addLecture(form.value.name, form.value.day, form.value.hour);
    }else{
      console.log("11111111" + form.value.student.name);
      this.lecturesService.updateLecture(this.lectureId, form.value.name, form.value.day, form.value.hour, form.value.student);
    }
    form.resetForm();
  }
}
