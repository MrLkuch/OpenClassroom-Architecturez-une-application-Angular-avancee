import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from '../post-list-item/post-list-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [PostListItem, CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList {

    posts$!: Observable<Post[]>;

    
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }
}
