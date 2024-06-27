import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcenterComponent } from './dashcenter.component';

describe('DashcenterComponent', () => {
  let component: DashcenterComponent;
  let fixture: ComponentFixture<DashcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashcenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
