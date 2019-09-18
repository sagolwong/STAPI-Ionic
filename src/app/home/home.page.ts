import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartrekService } from '../services/startrek.service';
import { People } from './../models/people'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {
  peoples:Array<People> =[]
  lastPage:boolean =false
  page: number=0
  private peopleSubscribe: Subscription;
  constructor(private startrekService: StartrekService) {}
  ngOnInit(){
    this.startrekService.loadPeople(0).subscribe(results=>{
      this.lastPage= results.lastPage
      this.peoples= results.results
    })
  }
  ngOnDestroy(){
    this.peopleSubscribe.unsubscribe()
  }
  loadPage(event){
    this.page++
    this.startrekService.loadPeople(this.page).subscribe(results=>{
      this.peoples = [...this.peoples,...results.results]
      event.target.complete();
    })
  }
}
