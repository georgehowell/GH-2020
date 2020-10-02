import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesBannersComponent } from './slides-banners.component';

describe('SlidesBannersComponent', () => {
  let component: SlidesBannersComponent;
  let fixture: ComponentFixture<SlidesBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
