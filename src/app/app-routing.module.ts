import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductComponent} from "./product/product.component";
import {PersonComponent} from "./person/person.component";
import {BookComponent} from "./input-ouput/components/book/book.component";
import {CekilisComponent} from "./component-communication/components/cekilis/cekilis.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  // spesifik linkler başta olmalı. GithubFollowersComponent altında olsaydı bu url çalışmazıd
  {
    path: 'followers/:id/:username',
    component: GithubProfileComponent
  },

  {
    path: 'followers',
    component: GithubFollowersComponent
  },

  {
    path: 'posts',
    component: PostsComponent
  },

  {
    path: 'products',
    component: ProductComponent
  },

  {
    path: 'people',
    component: PersonComponent
  },

  {
    path: 'input-output',
    component: BookComponent
  },

  {
    path: 'cekilis',
    component: CekilisComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
