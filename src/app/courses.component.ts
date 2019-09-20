
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
    template: `
    <table>
        <tr>
            <td [attr.colspan]="colSpan" >Test</td>
        </tr>
    </table>
    `
})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan = 2;
}