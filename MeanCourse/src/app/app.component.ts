import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

//custom component imports below
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list/post-list.component';
import { HeaderComponent } from './header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCreateComponent, PostListComponent, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})


export class AppComponent {

  storedPosts = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

}

