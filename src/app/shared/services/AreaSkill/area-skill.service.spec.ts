import { TestBed } from '@angular/core/testing';

import { AreaSkillService } from './area-skill.service';

describe('AreaSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaSkillService = TestBed.get(AreaSkillService);
    expect(service).toBeTruthy();
  });
});
