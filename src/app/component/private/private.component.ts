import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Conto } from 'src/app/model/conto.model';
import { AuthService } from 'src/app/service/auth.service';
import { ContoService } from 'src/app/service/conto.service';
import { navbarData } from './nav-data';
import { INavbarData } from './subnavdata';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter() ;

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  saldo:number;
  intestatario:string
  iban:string
  conto:Conto
  conti:Conto[]
  importo:number
  showSale = false;
  totale:number;

  isAuthenticated = false;
  public userSub: Subscription;
 
  


  constructor(
    private service:ContoService,
    private http: HttpClient, 
    public authService: AuthService,
    public router: Router
    ) {}


  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routerLink) ? 'active' : '';
  }

  handleClick(item: INavbarData): void {
    if(!this.multiple){
      for(let modelItem of this.navData) {
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
      item.expanded = !item.expanded;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
     collapsed: this.collapsed , 
     screenWidth: this.screenWidth
    });
}

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth: this.screenWidth});
  }


  ngOnInit(): void {
   // this.get()
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  showMoney(){
    this.showSale = !this.showSale;
  }

  bonifico(importo){
    this.service.bonifico(importo).subscribe(res => {
      console.log(res);
      this.conto.saldo=this.conto.saldo+importo;
      this.totale = this.conto.saldo+importo ;
      
      //this.caricaUser();
    });
  }

  add(saldo,intestatario,iban){
    this.service.add(saldo,intestatario,iban)
    .subscribe(res => {
      console.log(res);});
  }

  get() {
    this.http.get<Conto[]>('http://localhost:3000/movimenti')
    .subscribe(elementi => {
      this.conti = elementi;
      console.log(elementi)})
     this.showSale = !this.showSale;

  }

  delet(saldo, intestatario){
    this.http.delete(saldo,intestatario)
    .subscribe(res => {
    console.log(res);});
  }

  logout(){
    this.authService.logout();
  }

}



