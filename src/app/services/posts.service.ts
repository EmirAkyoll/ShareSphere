import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost(post_id: number | string | null): Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  }
  
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  
  getOwnPosts(user_id: number | undefined): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  }

  addNewPost(post_data: Post): Observable<Post>{
    return this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts`, post_data)
  }

  deletePost(post_id: number | null): Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  }

  updatePost(post_id: number, post_data: Post): any{
    const stringifiedPostData = JSON.stringify(post_data);
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${post_id}`, stringifiedPostData).subscribe(data => {
      console.log("datta: ",data);
    })
    
  }
}
