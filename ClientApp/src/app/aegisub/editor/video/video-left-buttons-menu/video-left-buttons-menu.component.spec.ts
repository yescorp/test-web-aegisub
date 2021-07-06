import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLeftButtonsMenuComponent } from './video-left-buttons-menu.component';

describe('VideoLeftButtonsMenuComponent', () => {
  let component: VideoLeftButtonsMenuComponent;
  let fixture: ComponentFixture<VideoLeftButtonsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLeftButtonsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLeftButtonsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
