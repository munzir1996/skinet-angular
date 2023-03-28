import { BasketsService } from './basket/baskets.service';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Skinet';

  constructor(
    private basketsService: BasketsService
  ) {

    }

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');

    if (basketId) {
      this.basketsService.getBasket(basketId).subscribe(() => {
        console.log('init basket');

      }, error => {
        console.log(error);

      })
    }
  }

}
