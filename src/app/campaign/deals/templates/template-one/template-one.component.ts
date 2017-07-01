import { Component, OnInit } from '@angular/core';
import { DealsService } from "app/deals.service";

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css']
})
export class TemplateOneComponent implements OnInit {

 savedAmount: number;
  constructor(public dealService: DealsService) { }
  quantity:number;
  ngOnInit() {
      this.calculateSavedPercentage();
      this.quantity = 1;
      this.dealService.dealChanged.subscribe(
          ()=>{
            this.calculateSavedPercentage();
            console.log('Title'+ this.dealService.getValueFor('title'));
          }
        );
  }

  calculateSavedPercentage () {
      let offerAmount = parseFloat(this.dealService.getValueFor('offerAmount')) || 1;
      let actualAmount = parseFloat(this.dealService.getValueFor('actualAmount')) || 1;
      let savedAmount =  parseFloat((100-(offerAmount * 100 / actualAmount)).toFixed(2));
      this.savedAmount = savedAmount;
  }

}
