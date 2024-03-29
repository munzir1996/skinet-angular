import { IBasket, IBasketItem } from './../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketsService } from './baskets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;

  constructor(
    private basketsService: BasketsService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.basketsService.basket$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basketsService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketsService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketsService.decrementItemQuantity(item);
  }

}
