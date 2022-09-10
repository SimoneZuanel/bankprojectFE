import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conto } from '../model/conto.model';

@Injectable({
  providedIn: 'root'
})
export class ContoService {

  conto:Conto

  constructor(private http: HttpClient) { }

  bonifico(importo): Observable<Conto>{
    return this.http.put<Conto>('https://bankingproject-f9472-default-rtdb.firebaseio.com/posts.json',importo,
    {
      //headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + this.service.token)
    })
  }

  add(saldo,intestatario,iban): Observable<Conto>{
    return this.http.post<Conto>('https://bankingproject-f9472-default-rtdb.firebaseio.com/posts.json',{saldo:saldo,intestatario:intestatario,iban:iban},
    {
      //headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + this.service.token)
    })
  }


}
