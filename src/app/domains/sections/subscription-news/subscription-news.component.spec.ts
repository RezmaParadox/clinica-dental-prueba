import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionNewsComponent } from './subscription-news.component';

describe('SubscriptionNewsComponent', () => {
  let component: SubscriptionNewsComponent;
  let fixture: ComponentFixture<SubscriptionNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionNewsComponent]
    });
    fixture = TestBed.createComponent(SubscriptionNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
