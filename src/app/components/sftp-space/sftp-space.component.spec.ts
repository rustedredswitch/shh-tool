import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SftpSpaceComponent} from './sftp-space.component';

describe('SftpSpaceComponent', () => {
  let component: SftpSpaceComponent;
  let fixture: ComponentFixture<SftpSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SftpSpaceComponent]
    });
    fixture = TestBed.createComponent(SftpSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
