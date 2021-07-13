import {
  inject,
  TestBed
} from '@angular/core/testing';

import { Router, RouterOutlet } from "@angular/router";
import { AppComponent } from './app.component';

class MockRouter { public navigate() {}; }

describe('App', () => {

  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        {provide: Router,  useClass: MockRouter },
          RouterOutlet
      ]}));
});