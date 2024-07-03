import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  createPostMsg = 'Create New Post: ';
  enteredValue = '';
  
  newPost = 'NO CONTENT';
  onAddPost(){
    this.newPost = this.enteredValue;
  }
}
