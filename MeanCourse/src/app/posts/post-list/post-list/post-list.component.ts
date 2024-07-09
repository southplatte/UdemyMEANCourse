import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
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
  imports: [MatExpansionPanel, MatAccordion, MatExpansionPanelHeader, NgFor, NgForOf, NgIf],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'Some content for first post'},
  //   {title: 'Second Post', content: 'Some content for second post'},
  //   {title: 'Third Post', content: 'Some content for third post'},
  //   {title: 'Fourth Post', content: 'Some content for fourth post'},

  // ]

  posts: Post[] = [];
  private postsSub: Subscription;
  //postsService: PostsService;
    constructor(public postsService: PostsService) {
      
    }
    ngOnInit(){
        this.posts = this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListenter()
        .subscribe((posts: Post[]) => { 
          this.posts = posts 
        });
    }

    ngOnDestroy(): void {
      this.postsSub.unsubscribe();
    }

}
