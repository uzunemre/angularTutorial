import {Component} from '@angular/core';
import {FavoriteChangedEventArgs} from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  };

  // courses = [1, 2];

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  viewMode = 'map';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs);
  }

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(index) {
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.courses = [];
    this.courses = [
      {id: 100, name: 'course1'},
      {id: 101, name: 'course2'},
      {id: 102, name: 'course3'},
      {id: 102, name: 'course4'},
    ];
  }

}
