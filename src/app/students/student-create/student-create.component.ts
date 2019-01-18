import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../teachers/teacher.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentsService} from "../../services/students.service";
import {Student} from "../student.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  private mode = "create";
  private studentId: string;
  private existStudent: Student;

  constructor(public studentsService: StudentsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has("studentId")) {
        this.mode = "edit";
        this.studentId = paramMap.get("studentId");
        this.existStudent = this.studentsService.getStudent(this.studentId);
      }else{
        this.mode = "create";
        this.studentId = null;
      }

    })
  }

  onSaveStudent(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    if (this.mode === "create"){
      this.studentsService.addStudent(form.value.name);
    }else{
      this.studentsService.updateStudent(this.studentId, form.value.name);
    }
    form.resetForm();
  }
}
