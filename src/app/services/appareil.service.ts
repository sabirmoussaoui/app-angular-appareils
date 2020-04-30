import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService{
  appareilSubject =  new Subject<any[]>() ;
  private appareils = []

  constructor(private httpClient : HttpClient){}
lastUpdate  = new Promise((resolve,reject)=>{
           const date  = new Date() ; 
           setTimeout(() => {
             resolve(date) ; 
           }, 2000);
            }) ;   

switchOnAll(){for(let appareil of this.appareils)appareil.status='enable'; }
switchOffAll(){ for(let appareil of this.appareils)appareil.status='disable';}
switchOnOne(i: number) {this.appareils[i].status = 'enable';}
switchOffOne(i: number) {this.appareils[i].status = 'disable';}
getApparielById(id : number){const appareil = this.appareils.find(obj => obj.id ===  id);return appareil; }


saveAppareilsToServer(){
  this.httpClient.put('https://web-automation-6f58f.firebaseio.com/appareils.json',this.appareils).subscribe(
    ()=> console.log('appareils à été enregistré'),
    (error)=>console.log('error : '+error))

}
getAppareilsFromServer(){
this.httpClient.get<any[]>('https://web-automation-6f58f.firebaseio.com/appareils.json').subscribe(
  (response)=> {
    this.appareils = response
    this.emitAppareilSubject()
    console.log(this.appareils)
  },
  (error)=>console.log('error : '+error) 
)

}
save(name:string , status:string){
  this.getAppareilsFromServer()
  const appareilObject = {id:0,name:"Default",status:"Disable"}
  appareilObject.name = name 
  appareilObject.status = status 
  appareilObject.id +=1
  console.log(appareilObject)
  this.appareils.push(appareilObject)
  this.saveAppareilsToServer()
  this.emitAppareilSubject()
}
emitAppareilSubject() {this.appareilSubject.next(this.appareils.slice());
}


}

