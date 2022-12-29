import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedTasksBoxComponent } from './removed-tasks-box.component';

describe('RemovedTasksBoxComponent', () => {
  let component: RemovedTasksBoxComponent;
  let fixture: ComponentFixture<RemovedTasksBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedTasksBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedTasksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
