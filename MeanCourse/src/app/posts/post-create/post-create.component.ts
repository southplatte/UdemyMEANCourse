import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatError } from '@angular/material/input';
import { NgIf } from '@angular/common';

//do not include these in the component imports
//import { EventEmitter } from '@angular/core';

//import interfaces here
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatError, NgIf],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'

})
export class PostCreateComponent {
  createPostMsg = 'Create New Post: ';
  enteredTitle = '';
  content = '';
  @Output() postCreated = new EventEmitter<Post>();
  
  newPost = 'NO CONTENT';
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    //this.newPost = this.enteredValue;
    const post: Post = {
      title: form.value.title, 
      content: form.value.content
    }
    this.postCreated.emit(post);
  }
}
