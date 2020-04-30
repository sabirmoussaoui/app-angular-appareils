import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
 secondes = 0 ; 
 counterSubscription: Subscription;
  ngOnInit(){
 
  const counter = Observable.interval(10000)
  this.counterSubscription=counter.subscribe(
    (next)=> this.secondes= next, 
    (error)=>console.log(error),
    ()=>console.log('Observable Complete')
                   ) }
 ngOnDestroy(){
  this.counterSubscription.unsubscribe();
}
 
}