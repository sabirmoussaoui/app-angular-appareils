import { Component, OnInit, Input } from '@angular/core';
import { faThumbsUp,faThumbsDown} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title:string; 
  @Input() content:string; 
  @Input() loveIts:number; 
  @Input() created_at:Date; 
  @Input() dontloveIts : number ; 
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  constructor() { }
  ngOnInit(): void {
  }
like= 0 ; 
deslike = 0 ; 
 loveit(){
   if(this.like===0){
   this.loveIts +=1 ;
   this.dontloveIts-= 1; 
   this.like+=1 ; 
   this.deslike=0; 

    }
}
dontLoveit(){
  if(this.deslike===0){
  this.dontloveIts +=1 ;
  this.loveIts -=1 ;
  this.deslike+=1; 
  this.like =0 ; 
}}
}
