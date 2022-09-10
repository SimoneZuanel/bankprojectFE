import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidh = 0;

  constructor() { }

  getBodyClass() : string {
    let styleClass = '';
    if(this.collapsed && this.screenWidh > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidh <= 768 && this.screenWidh > 0) {
      styleClass = 'body-md-screen';
    }
     return styleClass;
  }

}