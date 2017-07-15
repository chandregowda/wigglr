import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CouponsComponent } from './campaign/coupons/coupons.component';
import { DealsComponent } from './campaign/deals/deals.component';
import { DefaultComponent } from './campaign/deals/templates/default/default.component';
import { TemplateOneComponent } from './campaign/deals/templates/template-one/template-one.component';
import { TemplatesComponent } from './campaign/deals/templates/templates.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { HeaderComponent } from './header/header.component';
import { TemplateService } from './template.service';
import { DealsService } from './deals.service';
import { WebApiObservableService } from './web-api-observable.service';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerModule } from 'ng2-datepicker';
import { ShareModule } from 'ng2share/share.module';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    HeaderComponent,
    DealsComponent,
    CouponsComponent,
    DefaultComponent,
    TemplatesComponent,
    TemplateOneComponent,
    GoogleMapsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    DatePickerModule
  ],
  providers: [TemplateService, DealsService, WebApiObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
