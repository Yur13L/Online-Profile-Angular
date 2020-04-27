import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.data';
import { AreaSkill } from '../../models/area-skill.data';

@Injectable({
  providedIn: 'root'
})
export class AreaSkillService {

  constructor(private httpClient: HttpClient){
  }

  public getAreaSkillAll(): Observable<AreaSkill[]> {
    return this.httpClient.get<AreaSkill[]>("assets/mockdata/SkillsData.json");
  }
}
