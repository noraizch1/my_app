import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostsComponent } from './component/posts/posts.component';
import { UsersComponent } from './component/users/users.component';
import { PostComponent } from './component/post/post.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
 {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**' ,     component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 