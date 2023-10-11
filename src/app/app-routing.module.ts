import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { PostOperationsComponent } from './post-operations/post-operations.component';

const routes: Routes = [
  { path: '', component: PostsComponent, pathMatch: 'full' },
  { path: 'my-posts', component: PostOperationsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'comments/:id', component: CommentsComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
