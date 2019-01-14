import { Component, OnInit } from '@angular/core';
import {TeachersService} from "../../services/teachers.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Teacher} from "../teacher.model";

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

  private mode = "create";
  private teacherId: string;
  private existTeacher: Teacher;

  constructor(public teachersService: TeachersService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has("teacherId")) {
        this.mode = "edit";
        this.teacherId = paramMap.get("teacherId");
        this.existTeacher = this.teachersService.getTeacher(this.teacherId);
      }else{
        this.mode = "create";
        this.teacherId = null;
      }

      })
  }

  //for create or edit
  onSaveTeacher(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    if (this.mode === "create"){
      this.teachersService.addTeacher(form.value.name, form.value.profession);
    }else{
      this.teachersService.updateTeacher(this.teacherId, form.value.name, form.value.profession);
    }
    form.resetForm();
  }
}
