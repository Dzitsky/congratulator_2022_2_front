import {Component} from '@angular/core';
import {cards, ICard} from "../../../models/card";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  card: ICard | undefined;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('cardId'));

    // Find the product that correspond with the id provided in route.
    this.card = cards.find(card => card.id === productIdFromRoute);

  }

}
