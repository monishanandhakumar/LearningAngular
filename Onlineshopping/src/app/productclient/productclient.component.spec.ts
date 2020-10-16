import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclientComponent } from './productclient.component';

describe('ProductclientComponent', () => {
  let component: ProductclientComponent;
  let fixture: ComponentFixture<ProductclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
