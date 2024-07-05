import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

//custom component imports below
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list/post-list.component';
import { HeaderComponent } from './header/header/header.component';

//import interfaces here
import { Post } from './posts/posts.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCreateComponent, PostListComponent, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})


export class AppComponent {

  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

}

