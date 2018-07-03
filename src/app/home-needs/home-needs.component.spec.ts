import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNeedsComponent } from './home-needs.component';

describe('HomeNeedsComponent', () => {
  let component: HomeNeedsComponent;
  let fixture: ComponentFixture<HomeNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
