import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasepageComponent } from './releasepage.component';

describe('ReleasepageComponent', () => {
  let component: ReleasepageComponent;
  let fixture: ComponentFixture<ReleasepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
