import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBottomControlsComponent } from './video-bottom-controls.component';

describe('VideoBottomControlsComponent', () => {
  let component: VideoBottomControlsComponent;
  let fixture: ComponentFixture<VideoBottomControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBottomControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBottomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
