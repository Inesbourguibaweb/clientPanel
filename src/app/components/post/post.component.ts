import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl(),
    body: new FormControl(),
  });
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
  onAddingPost(title: string, body: string) {
    console.log('title', title);
    console.log('body', body);
    this.postsService.addPost({ title, body } as Post).subscribe((res) => {
      console.log('res', res);
    });
  }
}
