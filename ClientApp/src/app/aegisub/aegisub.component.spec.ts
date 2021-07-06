import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AegisubComponent } from './aegisub.component';



describe('AegisubComponent', () => {
  let component: AegisubComponent;
  let fixture: ComponentFixture<AegisubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AegisubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AegisubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
