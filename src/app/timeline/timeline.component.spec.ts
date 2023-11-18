import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TimelineComponent],
    });
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have timelineData', () => {
    expect(component.timelineData).toBeDefined();
    expect(component.timelineData.length).toBeGreaterThan(0);
  });
});
