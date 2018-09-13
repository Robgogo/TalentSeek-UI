import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  public baseUrl = "http://192.168.1.199:8080/uniMed_eCard/rest/";
  constructor() { }
}
