import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import {faPlay,faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils : any[]; 
  appareilSubscription: Subscription
  lastUpdate ; 
  isAuth : boolean;
  faPlay = faPlay
  faPowerOff = faPowerOff
  constructor(private appareilService : AppareilService,private authService : AuthService) {
   
  

  }
  ngOnInit(): void{
    this.appareilService.getAppareilsFromServer()
    this.appareilService.emitAppareilSubject()
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
  this.lastUpdate = this.appareilService.lastUpdate;
  this.isAuth= this.authService.isAuth ;

  this.appareilService.emitAppareilSubject()

  
}
  switchOnAll(){this.appareilService.switchOnAll()}
  switchOffAll(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
    return null;
  }}

 
  getAllAppareils(){this.appareilService.getAppareilsFromServer()}

  ngOnDestroy(){
    this.appareilSubscription.unsubscribe();
  }
}
