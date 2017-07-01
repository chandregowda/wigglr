import { Component, OnInit } from '@angular/core';
import { Deals } from '../../deals.model';
import { DealsService } from '../../deals.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
   
  startDate: DateModel;
  endDate: DateModel;
  options: DatePickerOptions;

  title: string = '60 Days of Yoga for just Rs. 600 !';
  subTitle: string = ' Marathalli, Bengaluru.';
  actualAmount: number = 1200;
  offerAmount: number = 600;
  couponsAvailable: number = 100;
  dealDescription: string= 'Minim quis adipisicing pariatur ut duis sint pariatur. Tempor ut ut quis consequat reprehenderit. Reprehenderit nulla veniam duis esse dolor ea cupidatat pariatur enim velit proident cupidatat.';
  imagePath: string = 'https://static.sharecare.com/promo/topics/yoga-safety-1.jpg';
  tnc: Array<Object> = [{name: 'Enjoy 60 days of Yoga for just Rs. 600 !'},{name: 'With just Rs. 10 a day'} ,{name: 'World Class training by Modi'}];
  address: Array<Object> = [{line: '#42, 5th Cross'},{line: 'BCC Layout (Behind Vidya Sagar School)'} ,{line: 'ChandraLayout, Bangalore Karnataka'}];
  longitude: number = 77.538152;
  latitude: number = 12.961092;
  socialMediaURL:string = 'https://www.google.com';
  socialMediaTitle:string = 'My Google';
  socialMediaDescription: string = 'Google Search Engine is the best';
  socialMediaVia: string = 'Google Via';
  socialMediaHashTag: string = '@Google';
  

  constructor(public dealService: DealsService) { }

  ngOnInit() {
    this.dealService.onTitleChanged(this.title);
    this.dealService.onSubTitleChanged(this.subTitle);
    this.dealService.onActualAmountChanged(this.actualAmount);
    this.dealService.onOfferAmountChanged(this.offerAmount);
    this.dealService.onCouponsChanged(this.couponsAvailable);
    this.dealService.onTncChanged(this.tnc);
    this.dealService.onAddressChanged(this.address);
    this.dealService.onImagePathChanged(this.imagePath);
    this.dealService.onDescriptionChanged(this.dealDescription);
    this.dealService.onLatitudeChanged(this.latitude);
    this.dealService.onLongitudeChanged(this.longitude);
    this.dealService.onSocialMediaURL(this.socialMediaURL);
    this.dealService.onSocialMediaTitle(this.socialMediaTitle);
    this.dealService.onSocialMediaDescription(this.socialMediaDescription);
    this.dealService.onSocialMediaHashTag(this.socialMediaHashTag);
    this.dealService.onSocialMediaVia(this.socialMediaVia);

    this.options = new DatePickerOptions({initialDate:new Date(), autoApply:true});
  }

  addNewTnc() {
    this.tnc.push({name: ''});
    this.dealService.onTncChanged(this.tnc);
  }
  onTitleChange(event:string) {
    this.dealService.onTitleChanged(this.title);
  }

  onSubTilteChange(event: string) {
    this.dealService.onSubTitleChanged(this.subTitle);
  }

  onActualAmountChange(event: any) {
    this.dealService.onActualAmountChanged(this.actualAmount);
  }
  onOfferAmountChange(event: any) {
    this.dealService.onOfferAmountChanged(this.offerAmount);
  }

  onCouponsChange(event: any) {
    this.dealService.onCouponsChanged(this.couponsAvailable);
  }

  onImagePathChange(event: any) {
    this.dealService.onImagePathChanged(this.imagePath);
  }

  onDescriptionChange(event: any) {
    this.dealService.onDescriptionChanged(this.dealDescription);
  }

  onSocialMediaURLChange(event: any) {
    this.dealService.onSocialMediaURL(this.socialMediaURL);
  }

  onSocialMediaTitleChange(event: any) {
    this.dealService.onSocialMediaTitle(this.socialMediaTitle);
  }

  onSocialMediaDescriptionChange(event: any) {
    this.dealService.onSocialMediaDescription(this.socialMediaDescription);
  }

  onSocialMediaViaChange(event: any) {
    this.dealService.onSocialMediaVia(this.socialMediaVia);
  }

  onSocialMediaHashTagChange(event: any) {
    this.dealService.onSocialMediaHashTag(this.socialMediaHashTag);
  }

  onTncChange(event: any) {
    this.dealService.onTncChanged(this.tnc);
  }

  onAddressChange(event: any) {
    this.dealService.onAddressChanged(this.address);
  }

  onLongitudeChange(event: any) {
    this.dealService.onLongitudeChanged(this.longitude);
  }
  onLatitudeChange(event: any) {
    this.dealService.onLatitudeChanged(this.latitude);
  }
}
