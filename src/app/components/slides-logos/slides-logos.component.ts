import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-logos',
  templateUrl: './slides-logos.component.html',
  styleUrls: ['./slides-logos.component.scss']
})
export class SlidesLogosComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
