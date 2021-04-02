import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';
import {IChecklistForm, IUsabilityEvaluationRequest} from '../models/usability';

@Injectable({
  providedIn: 'root'
})
export class UsabilityService {

  constructor(private readonly config: ConfigService,
              private readonly http: HttpClient) {}

  getChecklistData(): Observable<IUsabilityEvaluationRequest[]> {
    return this.http.get<IUsabilityEvaluationRequest[]>(this.config.getServer('/usability-evaluation-request'));
  }

  getChecklistDetails(checklistUuid: string): Observable<IChecklistForm> {
    return this.http.get<IChecklistForm>(`${this.config.getServer('/usability-evaluation-request')}/${checklistUuid}`);
  }
}
