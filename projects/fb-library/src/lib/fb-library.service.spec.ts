import { TestBed } from '@angular/core/testing';

import { FbLibraryService } from './fb-library.service';

describe('FbLibraryService', () => {
  let service: FbLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
