import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    });
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects defined', () => {
    expect(component.projects).toBeDefined();
  });

  it('should have at least one project', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });
});
