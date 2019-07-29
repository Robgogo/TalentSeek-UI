import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  public baseUrl = "http://talentseek.herokuapp.com/";
  constructor() { }
}
