import { BasketsService } from './../../basket/baskets.service';
import { IProduct } from './../../shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product: IProduct

  constructor(
    private basketsService: BasketsService
  ) {

  }

  ngOnInit(): void {

  }

  addItemToBasket() {
    this.basketsService.addItemToBasket(this.product);
  }

}
