import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SlidesComponent } from './slides/slides.component';
import { SlidesBannersComponent } from './slides-banners/slides-banners.component';
import { SlidesLogosComponent } from './slides-logos/slides-logos.component';
import { SlidesAdsComponent } from './slides-ads/slides-ads.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        SlidesComponent,
        SlidesBannersComponent,
        SlidesLogosComponent,
        SlidesAdsComponent,
        NavigationComponent,
        ThumbnailsComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
