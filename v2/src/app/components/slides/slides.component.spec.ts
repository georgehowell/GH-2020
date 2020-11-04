import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { slidesComponent } from './slides.component';

describe('slidesComponent', () => {
  let component: slidesComponent;
  let fixture: ComponentFixture<slidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ slidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(slidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
