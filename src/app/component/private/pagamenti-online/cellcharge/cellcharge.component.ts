import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cellcharge',
  templateUrl: './cellcharge.component.html',
  styleUrls: ['./cellcharge.component.css']
})
export class CellchargeComponent implements OnInit {

  constructor() { }

  form: FormGroup

  ngOnInit(): void {
  }

}
