import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedTasksComponent } from './removed-tasks.component';

describe('RemovedTasksComponent', () => {
  let component: RemovedTasksComponent;
  let fixture: ComponentFixture<RemovedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
