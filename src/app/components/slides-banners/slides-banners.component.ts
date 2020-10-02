import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-banners',
  templateUrl: './slides-banners.component.html',
  styleUrls: ['./slides-banners.component.scss']
})
export class SlidesBannersComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
