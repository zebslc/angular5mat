import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconRegistry } from '@angular/material';
// import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let routes=AppRoutingModule.SeedRoutes();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent,
        AppComponent,
        AppRoutingModule
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

});
