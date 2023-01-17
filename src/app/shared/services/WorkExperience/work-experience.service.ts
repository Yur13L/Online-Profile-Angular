import { Injectable } from '@angular/core';
import { WorkExperience } from 'src/app/shared/models/work-experience.data';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private httpClient: HttpClient) {
  }

  public getWorkExperienceAll(): Observable<WorkExperience[]> {
    return this.httpClient.get<WorkExperience[]>("assets/mockdata/WorkExperienceData.json");
  }

}
