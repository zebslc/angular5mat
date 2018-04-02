import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
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
import { PageNotFoundComponent } from './core/page-not-found.component';

describe('Router: App', () => {
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
    'navigate to "" redirects you to /home',
    fakeAsync(() => {
      router.navigate(['']).then(
        () => {
          expect(router.url).toBe('/home');
        },
        () => {
          fail('Failed to open page');
        }
      );
    })
  );

  it(
    'should navigate to the /home page',
    fakeAsync(() => {
      router.navigate(['home']).then(
        () => {
          expect(router.url).toBe('/home');
        },
        () => {
          fail('Failed to open page');
        }
      );
    })
  );

  it(
    'navigate to "/abcdefghij" redirects you to /pagenotfound',
    fakeAsync(() => {
      router.navigate(['abcdefghij']).then(
        () => {
          expect(router.url).toBe('/pagenotfound');
        },
        () => {
          fail('Failed to open page');
        }
      );
    })
  );
});
