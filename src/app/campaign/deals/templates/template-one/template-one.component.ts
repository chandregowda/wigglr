import { Component, OnInit } from '@angular/core';
import { DealsService } from "app/deals.service";

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css']
})
export class TemplateOneComponent implements OnInit {
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
