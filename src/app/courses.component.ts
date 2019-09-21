
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

    template: `
        <input (keyup.enter)="onKeyUp()"/>
     `

})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan = 2;
    isActive = false;

    onSave($event) {
        console.log("Button was clicked", $event);
    }

    onKeyUp() {
        alert("Enter was clicked");
    }

}