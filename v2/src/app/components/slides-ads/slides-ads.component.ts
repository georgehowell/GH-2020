import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-ads',
  templateUrl: './slides-ads.component.html',
  styleUrls: ['./slides-ads.component.scss']
})
export class SlidesAdsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
