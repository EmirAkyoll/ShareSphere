import { Component, OnInit  } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { Comment, Post } from '../interfaces';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {
  chosen_post_id: string | number | null = '5';
  comments: Comment[] = [];
  chosenPost: Post = {} as Post;
  isChosenPostLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private commentsService: CommentsService,
              private postsService: PostsService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.chosen_post_id = params.get('id');
      // console.log("parametre: ",params.get('id'));

      this.postsService.getPost(params.get('id')).subscribe(post => {
        this.chosenPost = post;
        console.log(this.chosenPost);
      })
  
      this.commentsService.getComments(params.get('id')).subscribe(allComments => {
        this.comments = allComments;
        console.log(allComments);
        this.isChosenPostLoading = false
      })
    });
    
  }
}
