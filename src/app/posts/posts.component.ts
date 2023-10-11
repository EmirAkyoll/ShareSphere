import { Component } from '@angular/core';
import { MergedPost, Post, User } from '../interfaces';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
import { CommentsService } from '../services/comments.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { initialUserState } from '../app-state/states/user.state';
import { selectUserData } from '../app-state/selectors/user.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  constructor(private store: Store<AppState>,
              private postsService: PostsService, 
              private usersService: UsersService,
              private commentsService: CommentsService) {

      this.usersService.getUsers().subscribe(allUsers => {
        this.users = allUsers;

        this.postsService.getPosts().subscribe(allPosts => {
          allPosts.forEach((post) => {
            const user = this.users.find((user) => user.id === post.userId);
            this.mergedPosts.push({...post, userName: user?.name, city: user?.address?.city})
          });
          this.shuffleArray(this.mergedPosts)
          this.isLoading = false;
        })
      })
    }

  posts: Post[] = [];
  postData = {} as Post;

  users: User[] = [];
  currentUser = {} as User;

  mergedPosts: MergedPost[] = [];
  isLoading: boolean = true;

  getAllComments(post_id: number){
    this.commentsService.getComments(post_id).subscribe(allComments => {
      console.log(allComments);
    })
  }

  addNewPostData(post_title: string, post_content: string){
    
    this.postsService.getPosts().subscribe(allPosts => {
      this.posts = allPosts
    })
    
    this.store.select(selectUserData).subscribe(user_data => {
      this.currentUser = user_data[0]
    })

    this.postData.id = this.posts.length + 1;
    this.postData.userId = this.currentUser.id;
    this.postData.title = post_title;
    this.postData.body = post_content;
    console.log("postData: ",this.postData);
    
    this.postsService.addNewPost(this.postData).subscribe(new_post => {
      this.posts.push(new_post)
      console.log("new post: ",new_post);
    })
  } 

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
