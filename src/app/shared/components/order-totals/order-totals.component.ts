import { BasketsService } from './../../../basket/baskets.service';
import { IBasketTotal } from './../../models/basket';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {

  basketTotal$: Observable<IBasketTotal>;

  constructor(
    private basketsService: BasketsService,
  ) {

  }

  ngOnInit(): void {
    this.basketTotal$ = this.basketsService.basketTotal$;
  }
}
