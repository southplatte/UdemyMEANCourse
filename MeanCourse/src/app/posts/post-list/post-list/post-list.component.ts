import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatExpansionPanelActionRow } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

//import interfaces/services here
import { Post} from '../../posts.model';
import { PostsService } from '../../posts.service';


@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionPanel, MatAccordion, MatExpansionPanelHeader, NgFor, NgForOf, NgIf, MatExpansionPanelActionRow, MatButtonModule, MatIconModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;
  //postsService: PostsService;
    constructor(public postsService: PostsService) {

    }
    
    ngOnInit() {
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
    }

    onDelete(postId: string) {
      this.postsService.deletePost(postId);
      console.log('post service postId: ' + postId);
    }

    ngOnDestroy(): void {
      this.postsSub.unsubscribe();
    }
}
