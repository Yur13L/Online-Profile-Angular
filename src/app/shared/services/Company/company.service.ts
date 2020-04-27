import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/models/company.data';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient){
  }

  public getCompanyAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("assets/mockdata/CompanyData.json");
  }
}
