import { IBasket } from './../../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketsService } from './../../basket/baskets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  basket$: Observable<IBasket>;

  constructor(
    private basketsService: BasketsService
  ) {

  }

  ngOnInit(){
    this.basket$ = this.basketsService.basket$;
  }

}
