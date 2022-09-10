import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Conto } from 'src/app/model/conto.model';

@Component({
  selector: 'app-bonificobancario',
  templateUrl: './bonificobancario.component.html',
  styleUrls: ['./bonificobancario.component.css']
})
export class BonificobancarioComponent implements OnInit {

  conti:Conto[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.http.get<Conto[]>('http://localhost:3000/conto')
    .subscribe(elementi => {
      this.conti = elementi;
      console.log(elementi)})
     

  }

}
