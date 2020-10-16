import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsloginComponent } from './reactiveformslogin.component';

describe('ReactiveformsloginComponent', () => {
  let component: ReactiveformsloginComponent;
  let fixture: ComponentFixture<ReactiveformsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
