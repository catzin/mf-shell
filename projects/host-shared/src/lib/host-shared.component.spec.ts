import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSharedComponent } from './host-shared.component';

describe('HostSharedComponent', () => {
  let component: HostSharedComponent;
  let fixture: ComponentFixture<HostSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
