import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, TimelineComponent, ProjectsComponent],
})
export class HomeComponent {}
