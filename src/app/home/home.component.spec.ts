import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Should have an image with alt', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.alt).toBe(
      'A portrait of me, with fancy bokeh swirls, wearing graduation robes and cap, with a glass of champagne',
    );
  });
});
