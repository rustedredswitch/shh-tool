import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PerformanceBarComponent} from './performance-bar.component';

describe('PerformanceBarComponent', () => {
  let component: PerformanceBarComponent;
  let fixture: ComponentFixture<PerformanceBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceBarComponent]
    });
    fixture = TestBed.createComponent(PerformanceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
