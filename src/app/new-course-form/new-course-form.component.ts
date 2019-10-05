import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  constructor() {
  }

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Language'},
  ];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  /* form builder ile form bu şekilde de oluşturulabilir.
    constructor(fb: FormBuilder) {
      this.form = fb.group({
        name: ['', Validators.required],
        contact: fb.group({
          email: [],
          phone: []
        }),
        topics: fb.array([])
      });
    }
   */


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
