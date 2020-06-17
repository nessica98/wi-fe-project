import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownpageComponent } from './countdownpage.component';

describe('CountdownpageComponent', () => {
  let component: CountdownpageComponent;
  let fixture: ComponentFixture<CountdownpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
