import { Component, OnInit, Input } from '@angular/core';
import {faPlay,faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { AppareilService } from '../services/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName:   string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() isAuth:boolean; 
  @Input() id : number; 
faPlay = faPlay
faPowerOff = faPowerOff
  constructor(private appareilService :AppareilService) {  }
ngOnInit(): void {
  this.appareilService.getAppareilsFromServer()
}
getStatus(){return this.appareilStatus}
onSwitch() {
  if(this.appareilStatus === 'enable') {
    console.log(this.index)
    this.appareilService.switchOffOne(this.index);
  } else if(this.appareilStatus === 'disable') {
    this.appareilService.switchOnOne(this.index);
  }
}


getColorStatus(){
    if (this.appareilStatus==='disable')return 'red';
    else return 'green'; 
                }}
