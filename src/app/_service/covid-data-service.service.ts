import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { iCovid2G } from '../_interface/covid2-g';
import { Ilogin } from '../_interface/ilogin';


@Injectable({
  providedIn: 'root'
})
export class CovidDataServiceService {

  private serverUrl = 'http://localhost:3000';
  private postUrl:string = '/mitarbeiter/corona2G';
  private getUrl:string = '/mitarbeiter/login';
  private Eintrag: Subject<iCovid2G> = new Subject<iCovid2G>();

  constructor(private _http: HttpClient) { 

  }

  //CacheEintrag 
  public cacheEintrag(eintrag: iCovid2G): void{
      this.Eintrag.next(eintrag);
  }

  public getCachedEintrag(): Subject<iCovid2G>{
    return this.Eintrag!;
  }
  
  //Post
  public postEintrag(object: iCovid2G): Observable<iCovid2G> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };    
    return this._http.post<iCovid2G>(`${this.serverUrl}${this.postUrl}`,JSON.stringify(object), httpOptions)
  }

  //GetSingleRecord
  /*public getLogin(object: Ilogin) : Observable<iCovid2G>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   // return this._http.get<iCovid2G>(`${this.serverUrl}${this.getUrl}`,JSON.stringify(object),httpOptions)
  }
  */

}
