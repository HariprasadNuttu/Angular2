import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
@Injectable()
export class JobService {

  constructor(private http:HttpClient) { }

  jobs(){
  return this.http.get(environment.host+'recruiters/jobs_list');
}

}
