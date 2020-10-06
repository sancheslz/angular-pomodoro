import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity-interface';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  activity: Activity = {
    name: '',
    duration: null,
    repeat: 1,
    rest: 0
  }

  @Input() activityList: Activity[] = []

  addActivity() {
    if (this.activity.name !== '') {
      this.activityList.push({ ...this.activity })
    }
    this.clearActivity()
  }

  clearActivity() {
    this.activity = {
      name: '',
      duration: null,
      repeat: 1,
      rest: 0
    }
  }

  deleteActivity(act_id: number) {
    this.activityList.splice(act_id, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
