import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should have the dark mode toggle default', () => {
    expect(component.isDarkEnable).toBeFalse();
  });

  it('should be able to toggle dark mode', fakeAsync(() => {
    spyOn(component, 'toggleDarkMode');

    // Component toggle tests
    component.toggleDarkMode();
    expect(component.isDarkEnable).toBeFalse();

    // DOM Test
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.toggleDarkMode).toHaveBeenCalledTimes(2);
  }));
});
