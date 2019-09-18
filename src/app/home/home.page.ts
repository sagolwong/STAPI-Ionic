import { Component, OnInit } from '@angular/core';
import { StartrekService } from '../services/startrek.service';
import { People } from './../models/people'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peoples:Array<People> =[]
  constructor(private startrekService: StartrekService) {}
  ngOnInit(){
    this.startrekService.loadPeople(0).subscribe(peoples=>{
      this.peoples=this.peoples.concat(this.peoples,peoples)
      console.log(this.peoples)
    })
  }
}
