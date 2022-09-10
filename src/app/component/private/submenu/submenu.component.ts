import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData } from '../subnavdata';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({
        overflow: 'hidden'
      }),
      animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
   ]
})
export class SubmenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating : boolean | undefined;
  @Input() expanded : boolean | undefined;
  @Input() multiple = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  handleClick(item:any): void {
    console.log(item);
     if(!this.multiple){
        if(this.data.items && this.data.items.length > 0){
          console.table(this.data.items);
          for(let modelItem of this.data.items) {
            if(item !== modelItem && modelItem.expanded){
              modelItem.expanded = false;
            }
          }
        }
        item.expanded = !item.expanded;
     }
  }


  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routerLink) ? 'active-sublevel' : '' ;
  }

}
