import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:5555/user"

@Injectable({
  providedIn: 'root'
})

export class RegDataService {

  saveData(data){
    return this.httpclient.post(api,data)
  }
  constructor(private httpclient:HttpClient) { }
}
