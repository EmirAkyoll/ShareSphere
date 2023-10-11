import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post, User } from '../interfaces';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { selectUserData } from '../app-state/selectors/user.selector';

@Component({
  selector: 'app-post-operations',
  templateUrl: './post-operations.component.html',
  styleUrls: ['./post-operations.component.css']
})

export class PostOperationsComponent {
  constructor(private postsService: PostsService, private store: Store<AppState>,) {
    this.store.select(selectUserData).subscribe(user_data => {
      if (user_data) {
        this.currentUser = user_data[0]
        this.isOwnPostsLoading = false;
      } else {
        const session_user_data: any = sessionStorage.getItem('userData')
        this.currentUser = JSON.parse(session_user_data)
        this.isOwnPostsLoading = false;
      }
    })

    this.postsService.getOwnPosts(this.currentUser.id).subscribe(posts => {
      this.ownPosts = posts
    })
  }

  deletePost(){
    this.postsService.deletePost(this.postToBeActedOn.id)
    console.log(this.postToBeActedOn.id,"id li post silindi");
    this.ownPosts = this.ownPosts.filter(post => post.id !== this.postToBeActedOn.id)
  }

  updatePost(){
    this.postsService.updatePost(this.postToBeActedOn.id, this.postToBeActedOn)
    console.log(this.postToBeActedOn.id,"id li post güncellendi");
    this.postsService.getOwnPosts(this.currentUser.id).subscribe(posts => {
      this.ownPosts = posts
      console.log("takkar: ",posts);
      
    })
  } 

  bringPostDataForEdit() {
    this.postTitle = this.postToBeActedOn.title;
    this.postContent = this.postToBeActedOn.body;
  }

  changeModalType(modal_type: string) {
    this.whichModal = modal_type;
  }

  bringPostData(post_data: Post) {
    this.postToBeActedOn = post_data;
    console.log(this.postToBeActedOn);
  }

  postToBeActedOn = {} as Post;
  currentUser = {} as User;
  ownPosts: Post[] = []
  whichModal: string = 'delete';
  postTitle: string = '';
  postContent: string = '';
  isOwnPostsLoading: boolean = true;
}
