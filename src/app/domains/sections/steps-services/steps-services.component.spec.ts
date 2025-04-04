import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsServicesComponent } from './steps-services.component';

describe('StepsServicesComponent', () => {
  let component: StepsServicesComponent;
  let fixture: ComponentFixture<StepsServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsServicesComponent]
    });
    fixture = TestBed.createComponent(StepsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
