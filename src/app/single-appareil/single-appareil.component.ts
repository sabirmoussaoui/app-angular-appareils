import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
   appareil : object; 
  constructor(private appareilsService : AppareilService,private route : ActivatedRoute) { }
  ngOnInit(): void {
  const id    = this.route.snapshot.params['id'];  
  this.appareil = this.appareilsService.getApparielById(+id) ; 
  
  
}}
