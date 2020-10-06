# Pomodoro

A Simple Pomodoro created in Angular 10 during the Front End Bootcamp of IGTI

## Technologies

![Badge](https://img.shields.io/static/v1?label=structure&message=HTML5&color=E34F26&style=flat)
![Badge](https://img.shields.io/static/v1?label=style&message=CSS3&color=1572B6&style=flat)
![Badge](https://img.shields.io/static/v1?label=images&message=SVG&color=FFB13B&style=flat)
![Badge](https://img.shields.io/static/v1?label=logic&message=TypeScript&color=007ACC&style=flat)
![Badge](https://img.shields.io/static/v1?label=framework&message=Angular+10&color=DD0031&style=flat)

## Preview

![TicTactoe Screenshot](pomodoro.gif)

## Goals

- Work with dependence injection
- Allow user to create activities
- Run each activity and its rest time

## How it works

The project has four important files:

- `activity-interface.ts`: responsible by the structure of an activity
- `app.component.ts`: stores the list of activities created in `config.component`
- `config.component.ts`: allows the user to create a list of activities
- `timer.component.ts`: responsible to execute the pomodoro

The most important logic of the project is in `timer.component`. Here there are the control of execution of the list. When an activity runs, the red line of the image disappear with time. In rest interval a blue line appear and when it finishes start a new pomodoro.

## Final Notes

An improvement idea is create tomato thumbnails to represent the repetition of the activity and as it runs, these thumbnails disappear.
