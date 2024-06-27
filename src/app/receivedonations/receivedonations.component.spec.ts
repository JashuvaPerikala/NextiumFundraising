import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedonationsComponent } from './receivedonations.component';

describe('ReceivedonationsComponent', () => {
  let component: ReceivedonationsComponent;
  let fixture: ComponentFixture<ReceivedonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceivedonationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceivedonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
