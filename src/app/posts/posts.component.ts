import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {error} from 'selenium-webdriver';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;


  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    }, error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post).subscribe(response => {
      //post['id'] = response.id;
      this.posts.splice(0, 0, post);
    }, (error: Response) => {
      if (error instanceof  BadInput) {
        //this.form.setErrors(error.originalError);
      }
      else {
        alert('An unexpected error occurred');
        console.log(error);
      }
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    }, error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      }
      else {
        alert('An unexpected error occurred');
        console.log(error);
      }


    });
  }

}
