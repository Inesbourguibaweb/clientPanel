import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../services/posts.service';
import { Post } from '../../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  currentPost: Post = {
    id: 0,
    body: '',
    title: '',
  };
  // subsciption: Subscription;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // this.subsciption =
    this.postsService.getPosts().subscribe((posts) => {
      console.log('posts', posts);
      this.posts = posts;
    });
  }

  onAddingPost(newPost: Post) {
    this.posts.unshift(newPost);
  }
  onEditingPost(post: Post) {
    this.currentPost = post;
  }
}
