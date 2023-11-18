import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should have a title', () => {
    expect(component.title).toEqual('nikmaxott-portfolio');
  });

  it('should have isDarkEnable set to true if theme is dark', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('dark');
    expect(component.isDarkEnable).toBeTrue();
  });

  it('should have isDarkEnable set to false if theme is not dark', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('light');
    expect(component.isDarkEnable).toBeFalse();
  });

  it('should toggle the dark mode', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue('light');
    spyOn(window.localStorage, 'setItem');
    component.toggleDarkMode();
    expect(component.isDarkEnable).toBeTrue();
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });
});
