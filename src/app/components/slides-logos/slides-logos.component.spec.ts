import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesLogosComponent } from './slides-logos.component';

describe('SlidesLogosComponent', () => {
  let component: SlidesLogosComponent;
  let fixture: ComponentFixture<SlidesLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
