import { TestBed } from '@angular/core/testing';

import { TasksDatabaseService } from './tasks-database.service';

describe('TasksDatabaseService', () => {
  let service: TasksDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
