import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealsComponent } from 'app/campaign/deals/deals.component';
import { CampaignComponent } from 'app/campaign/campaign.component';
import { CouponsComponent } from 'app/campaign/coupons/coupons.component';
import { TemplatesComponent } from 'app/campaign/deals/templates/templates.component';
import { DefaultComponent } from "app/campaign/deals/templates/default/default.component";
import { TemplateOneComponent } from "app/campaign/deals/templates/template-one/template-one.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: CampaignComponent },
    { path: 'deals', redirectTo: '/deals/templates/default', pathMatch: 'full' },
    {
        path: 'deals/templates', component: DealsComponent, 'children': [
            { path: '', component: TemplatesComponent },
            { path: 'default', component: DefaultComponent },
            { path: ':templateId', component: TemplateOneComponent },
        ]
    },
    { path: 'coupons', component: CouponsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}