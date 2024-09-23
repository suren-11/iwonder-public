import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private apiUrl = 'http://localhost:5072/api/Test';
  constructor(private http: HttpClient) { }

  getName(name:string){
    return this.http.get(`${this.apiUrl}?name=${name}`,{responseType:'text'});
  }

  getImage(){
    return this.http.get(`${this.apiUrl}/getImage`,{responseType:'text'});
  }
}
