import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesAdsComponent } from './slides-ads.component';

describe('slidesAdsComponent', () => {
  let component: SlidesAdsComponent;
  let fixture: ComponentFixture<SlidesAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
