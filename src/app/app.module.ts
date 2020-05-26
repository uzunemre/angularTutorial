import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {GithubFollowersService} from './github-followers.service';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductComponent} from './product/product.component';
import {ProductService} from "./services/product.service";
import { PersonComponent } from './person/person.component';
import {PersonService} from "./services/person.service";
import { BookComponent } from './input-ouput/components/book/book.component';
import { CommentsComponent } from './input-ouput/components/comments/comments.component';
import { RateComponent } from './input-ouput/components/rate/rate.component';
import { RateResultComponent } from './input-ouput/components/rate-result/rate-result.component';

import { CekilisSonucComponent } from './component-communication/components/cekilis-sonuc/cekilis-sonuc.component';
import { CekilisComponent } from './component-communication/components/cekilis/cekilis.component';
import {CekilisBaslaComponent} from "./component-communication/components/cekilis-basla/cekilis-basla.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ProductComponent,
    PersonComponent,
    BookComponent,
    CommentsComponent,
    RateComponent,
    RateResultComponent,
    CekilisBaslaComponent,
    CekilisSonucComponent,
    CekilisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PersonService,
    ProductService,
    PostService,
    CoursesService,
    GithubFollowersService,
    AppErrorHandler,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
