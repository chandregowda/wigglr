import { Component, OnInit, Input } from '@angular/core';
import { DealsService } from 'app/deals.service';
declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  @Input() latitude;
  @Input() longitude;
  uluru:any;
  map: any;

  constructor(public dealService: DealsService) { }

  ngOnInit() {
      this.latitude = 12.961092;
      this.longitude = 77.538152;
    // https://jsfiddle.net/Xeoncross/k5c2ndyL/
      this.renderMap();

        this.dealService.mapLocationChanged.subscribe(
          (mapLocation)=>{
             this.latitude = mapLocation.latitude || 12.961092;
             this.longitude = mapLocation.longitude || 77.538152;
             this.renderMap();
          }
        );
  }

  renderMap() {
    this.uluru = new google.maps.LatLng(this.latitude, this.longitude);
    let googleElement = document.getElementById("googleMap");
   
    let mapProp = {
      center: this.uluru,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
 //   if (this.map === void 0) {
      this.map = new google.maps.Map(googleElement, mapProp);
  //  }
    let marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  }

}
