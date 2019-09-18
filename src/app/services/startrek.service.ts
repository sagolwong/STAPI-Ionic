import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People, PeopleQueryResult } from '../models/people';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartrekService {

  constructor(private http: HttpClient) { }
  loadPeople(page: number):Observable<PeopleQueryResult>{
    let url = `http://stapi.co/api/v1/rest/character/search?pageNumber=${page}`
    return this.http.get(url).pipe(map(data=>{
      return { 
        results: data['characters'],
        lastPage: data['page']['lastPage']
      }
    }))
  }
}
