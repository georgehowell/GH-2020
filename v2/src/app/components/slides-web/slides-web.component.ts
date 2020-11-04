import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-web',
  templateUrl: './slides-web.component.html',
  styleUrls: ['./slides-web.component.scss']
})
export class SlidesWebComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
