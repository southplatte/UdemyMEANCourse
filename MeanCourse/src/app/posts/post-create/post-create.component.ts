import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

//do not include these in the component imports
//import { EventEmitter } from '@angular/core';

//import interfaces here
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'

})
export class PostCreateComponent {
  createPostMsg = 'Create New Post: ';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  
  newPost = 'NO CONTENT';
  onAddPost(){
    //this.newPost = this.enteredValue;
    const post: Post = {
      title: this.enteredTitle, 
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }
}
