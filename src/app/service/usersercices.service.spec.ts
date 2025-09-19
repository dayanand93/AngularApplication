import { TestBed } from '@angular/core/testing';

import { UsersercicesService } from './usersercices.service';

describe('UsersercicesService', () => {
  let service: UsersercicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersercicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
