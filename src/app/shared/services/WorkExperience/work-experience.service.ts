import { Injectable } from '@angular/core';
import { WorkExperience } from 'src/app/shared/models/work-experience.data';
import { Observable } from 'rxjs';
import { find, filter, map} from 'rxjs/operators';
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

  public getWorkExperienceByCompanyId(companyId:number): Observable<WorkExperience> {
    return this.getWorkExperienceAll().pipe(
      map((resultCompanyList:WorkExperience[]) => 
        resultCompanyList.find( (resultCompanyItem:WorkExperience) => resultCompanyItem.id === companyId ))
    );
  }
}
