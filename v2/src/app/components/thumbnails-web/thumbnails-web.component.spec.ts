import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsWebComponent } from './thumbnails-web.component';

describe('ThumbnailsWebComponent', () => {
  let component: ThumbnailsWebComponent;
  let fixture: ComponentFixture<ThumbnailsWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
