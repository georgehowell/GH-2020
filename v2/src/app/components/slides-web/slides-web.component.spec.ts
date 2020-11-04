import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesWebComponent } from './slides-web.component';

describe('slidesComponent', () => {
  let component: SlidesWebComponent;
  let fixture: ComponentFixture<SlidesWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
