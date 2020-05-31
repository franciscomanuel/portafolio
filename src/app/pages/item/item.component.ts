import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {InfoProductDescriptionInterface} from '../../interfaces/info-product-description-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: InfoProductDescriptionInterface;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productsService.getProductById(params.id).subscribe((product: InfoProductDescriptionInterface) => {
        this.id = params.id;
        this.product = product;
      });

    });

  }

}
