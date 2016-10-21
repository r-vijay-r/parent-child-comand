/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParentChildService } from './parent-child.service';

describe('Service: ParentChild', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentChildService]
    });
  });

  it('should ...', inject([ParentChildService], (service: ParentChildService) => {
    expect(service).toBeTruthy();
  }));
});
