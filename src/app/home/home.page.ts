import { Component, OnInit } from '@angular/core';
import { StartrekService } from '../services/startrek.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private startrekService: StartrekService) {}
  ngOnInit(){
    this.startrekService.loadPeople(0).subscribe(peoples=>{
      console.log(peoples)
    })
  }
}
