import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmspinnerComponent } from './nextmspinner.component';

describe('NextmspinnerComponent', () => {
  let component: NextmspinnerComponent;
  let fixture: ComponentFixture<NextmspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextmspinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextmspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
