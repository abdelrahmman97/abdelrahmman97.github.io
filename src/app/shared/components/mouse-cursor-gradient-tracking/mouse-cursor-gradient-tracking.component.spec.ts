import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCursorGradientTrackingComponent } from './mouse-cursor-gradient-tracking.component';

describe('MouseCursorGradientTrackingComponent', () => {
  let component: MouseCursorGradientTrackingComponent;
  let fixture: ComponentFixture<MouseCursorGradientTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseCursorGradientTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseCursorGradientTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
