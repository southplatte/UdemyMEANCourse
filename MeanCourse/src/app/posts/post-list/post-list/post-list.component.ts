import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionPanelHeader } from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionPanel, MatAccordion, MatExpansionPanelHeader],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    {title: 'First Post', content: 'Some content for first post'},
    {title: 'Second Post', content: 'Some content for second post'},
    {title: 'Third Post', content: 'Some content for third post'},
    {title: 'Fourth Post', content: 'Some content for fourth post'},

  ]

}
