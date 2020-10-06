import { Activity } from './../activity-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() activityList: Activity[] = []

  svg = {
    total: 1632,
    current: 0,
    color: 'red'
  }

  isRunning: boolean = false
  isResting: boolean = false
  interval: number = undefined
  data = null

  getData() {
    if (this.activityList.length !== 0) {
      const { name, duration, repeat, rest } = this.activityList[0]
      return {
        name,
        duration,
        repeat,
        rest,
        steps: this.tomatoCounter(duration),
        rests: this.tomatoCounter(rest),
      }
    } else {
      return {
        name: 'No Activities',
        duration: 0,
        repeat: 0,
        rest: 0,
      }
    }
  }

  runActivity() {
    this.interval = setInterval(() => {

      this.svg.color = 'red'

      if (this.svg.current < this.svg.total) {
        this.svg.current += this.data.steps

      } else {

        clearInterval(this.interval)
        this.isResting = !this.isResting
        this.data.repeat -= 1

        if (this.data.repeat > 0) {
          this.runRest()

        } else {
          this.isRunning = !this.isRunning
          this.isResting = !this.isResting
          this.activityList.splice(0, 1)
          this.svg.current = 0

          if (this.activityList.length > 0) {
            this.data = this.getData()

          } else {
            this.data = {
              name: 'No Activities',
              duration: 0,
              repeat: 0,
              rest: 0
            }
          }
        }
      }

    }, 100)

  }

  runRest() {
    this.interval = setInterval(() => {
      this.svg.color = 'blue'

      if (this.svg.current > 0) {
        this.svg.current -= this.data.rests

      } else {
        clearInterval(this.interval)
        this.isResting = !this.isResting

        if (this.data.repeat !== 0) {
          this.runActivity()
        }
      }

    }, 100)
  }

  run() {
    this.isRunning = !this.isRunning
    if (!this.isResting) {
      this.runActivity()
    }
  }

  stop() {
    clearInterval(this.interval)
    this.isRunning = !this.isRunning
    this.svg.current = 0
  }

  tomatoCounter(duration: number) {
    let totalTime = duration * 60000
    let steps = 163000 / totalTime
    return steps
  }

  constructor() { }

  ngOnInit(): void {
    this.data = this.getData()
  }

}
