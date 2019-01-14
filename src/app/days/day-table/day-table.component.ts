import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-day-table',
  templateUrl: './day-table.component.html',
  styleUrls: ['./day-table.component.css']
})
export class DayTableComponent implements OnInit {
  private sub: any;
  day: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.day = params['day'];

      // In a real app: dispatch action to load the details here.
    });  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
