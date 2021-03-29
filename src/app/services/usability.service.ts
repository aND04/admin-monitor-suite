import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsabilityService {

  constructor(private readonly config: ConfigService,
              private readonly http: HttpClient) {}

  getChecklistData(): Observable<any> {
    return this.http.get(this.config.getServer('/accessibility-evaluation-request'));
  }
}
