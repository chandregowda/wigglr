import { Component, OnInit } from '@angular/core';
import { DealsService } from "app/deals.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(public dealService: DealsService) { }
  quantity: number;
  ngOnInit() {
    this.quantity = 1;
    this.dealService.dealChanged.subscribe(
      () => {
        // this.dealService.calculateSavedPercentage();
      }
    );
  }

}
