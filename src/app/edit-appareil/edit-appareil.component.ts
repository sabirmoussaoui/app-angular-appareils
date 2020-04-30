import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  constructor(private appareilService : AppareilService , private router : Router) { }

  ngOnInit(): void {
  }
save(form:NgForm){
  const name = form.value['name']
  const status = form.value['status']?"enable":"disable"
  this.appareilService.save(name,status)
  this.router.navigate(['/appareils'])
  
}

}
