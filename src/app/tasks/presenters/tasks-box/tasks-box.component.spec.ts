import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksBoxComponent } from './tasks-box.component';

describe('TasksBoxComponent', () => {
  let component: TasksBoxComponent;
  let fixture: ComponentFixture<TasksBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
