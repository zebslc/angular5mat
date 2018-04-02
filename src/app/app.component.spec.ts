import { PageNotFoundComponent } from './core/page-not-found.component';
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel
} from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  const routes = AppRoutingModule.applicationRoutes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, AppComponent, PageNotFoundComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it(
    'should create the app',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'Angular 5 material seed project'`,
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Angular 5 material seed project');
    })
  );
  it(
    'should render title in a h1 tag',
    async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'Angular 5 material seed project'
      );
    })
  );
});
