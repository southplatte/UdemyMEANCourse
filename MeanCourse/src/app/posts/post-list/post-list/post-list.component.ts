import { Component, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionPanel, MatAccordion, MatExpansionPanelHeader, NgFor, NgForOf, NgIf],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'Some content for first post'},
  //   {title: 'Second Post', content: 'Some content for second post'},
  //   {title: 'Third Post', content: 'Some content for third post'},
  //   {title: 'Fourth Post', content: 'Some content for fourth post'},

  // ]

  @Input() posts = [];

}
