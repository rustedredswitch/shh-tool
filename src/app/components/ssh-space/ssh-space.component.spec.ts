import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SshSpaceComponent} from './ssh-space.component';

describe('SshSpaceComponent', () => {
  let component: SshSpaceComponent;
  let fixture: ComponentFixture<SshSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SshSpaceComponent]
    });
    fixture = TestBed.createComponent(SshSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
