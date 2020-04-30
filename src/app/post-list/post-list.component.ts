import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../services/post.list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts  : any[]; 
  constructor(private postListService:PostListService) { }

  ngOnInit(): void {
    this.posts = this.postListService.posts ; 
                   }

}
