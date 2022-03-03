import { TestBed } from '@angular/core/testing';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DASHBOARD_MODULE_INITIALIZER_PROVIDER } from '../providers';
import { IssuesModuleService } from './issues.module.service';

describe('IssuesModuleService', () => {
  let service: IssuesModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    });

    service = TestBed.inject(
      DASHBOARD_MODULE_INITIALIZER,
    ) as IssuesModuleService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
