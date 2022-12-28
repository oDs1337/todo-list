import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTaskBoxComponent } from './single-task-box.component';

describe('SingleTaskBoxComponent', () => {
  let component: SingleTaskBoxComponent;
  let fixture: ComponentFixture<SingleTaskBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTaskBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTaskBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
