import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Language'},
  ];

  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() {
  }

  submit(f) {
    console.log(f);
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }


  get topics() {
    return this.form.get('topics') as FormArray;
  }


}
