
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

// property binding
@Component({
    selector: 'courses',
    /*template: `
    <h2>{{title}}</h2>
    <h2 [textContent]="title"></h2>
    <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl" />
    `*/

    // attribute binding. td de colspan igib bir özellik yok o yüzden attrbüte olarak eklyoruz
    /*template: `
    <table>
        <tr>
            <td [attr.colspan]="colSpan" >Test</td>
        </tr>
    </table>
    `*/

    // isActive değişkenine cöre aktif classı ekler. class binding
    /*template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
     `*/

    /*
   template: `
       <button [style.backgroundColor]="isActive ? 'blue':'white'">Save</button>
    `*/

    /*template: `
        <button (click)="onSave($event)">Save</button>
     `*/

    /*template: `
        <input (keyup.enter)="onKeyUp()"/>
     `-*/

    /*template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
     `*/

    /*template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `*/

    /*template: `
    {{course.title | uppercase}}<br/>
    {{course.students | number }}<br/>
    {{course.rating | number:'1.2-2' }}<br/>
    {{course.price | currency }}<br/>
    {{course.releaseDate | date:'shortDate' }}
    `*/

    template: `
        {{text | summary:10 }}
    `


})

export class CoursesComponent {

    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    /*title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan = 2;
    isActive = false;
    email = "emreuzun92@gmail.com";*/

    /*course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }*/

    /*onSave($event) {
        console.log("Button was clicked", $event);
    }*/

    /*onKeyUp() {
        alert("Enter was clicked");
    }*/

    /*onKeyUp(email) {
        alert(email);
    }*/

    /*onKeyUp() {
        alert(this.email);
    }*/

}