import { Deals } from './deals.model';
import { EventEmitter } from "@angular/core";

export class DealsService {
    public deal: Deals = new Deals('Title', 'Sub Title');
    
    dealChanged = new EventEmitter<Deals>();

    mapLocationChanged = new EventEmitter<{latitude: any, longitude: any}>();

    getValueFor (propertyName:string):any {
        return this.deal[propertyName];
    }

    onTitleChanged(title) {
       this.deal.title = title;
       this.dealChanged.emit(this.deal);
    }

    onSubTitleChanged(subTitle) {
        this.deal.subTitle = subTitle;
        this.dealChanged.emit(this.deal);
    }

    onActualAmountChanged(amount) {
        this.deal.actualAmount = amount;
        this.dealChanged.emit(this.deal);
    }

    onOfferAmountChanged(amount) {
        this.deal.offerAmount = amount;
        this.dealChanged.emit(this.deal);
    }


    onCouponsChanged(coupons) {
        this.deal.couponsAvailable = coupons;
        this.dealChanged.emit(this.deal);
    }

    onImagePathChanged(image) {
        this.deal.imagePath = image;
        this.dealChanged.emit(this.deal);
    }

    onDescriptionChanged(desc) {
        this.deal.dealDescription = desc;
        this.dealChanged.emit(this.deal);
    }

    onTncChanged(tnc) {
        this.deal.tnc = tnc;
        this.dealChanged.emit(this.deal);
    }

    onAddressChanged(addr){
        this.deal.address = addr;
        this.dealChanged.emit(this.deal) ;
    }

    onSocialMediaURL(url){
        this.deal.socialMediaURL = url;
        this.dealChanged.emit(this.deal);
    }
    onSocialMediaTitle(title){
        this.deal.socialMediaTitle = title;
        this.dealChanged.emit(this.deal);
    }    
    onSocialMediaDescription(description){
        this.deal.socialMediaDescription = description;
        this.dealChanged.emit(this.deal);
    }
    onSocialMediaVia(via){
        this.deal.socialMediaVia = via;
        this.dealChanged.emit(this.deal);
    }
    onSocialMediaHashTag(hashtag){
        this.deal.socialMediaHashTag = hashtag;
        this.dealChanged.emit(this.deal);
    }
    onLatitudeChanged(latitude){
        this.deal.latitude = latitude;
        //this.dealChanged.emit(this.deal);
        this.mapLocationChanged.emit({latitude: latitude, longitude: this.deal.longitude});
    }

    onLongitudeChanged(longitude){
        this.deal.longitude = longitude;
        //this.dealChanged.emit(this.deal);
         this.mapLocationChanged.emit({latitude: this.deal.latitude, longitude: longitude});
    }

}