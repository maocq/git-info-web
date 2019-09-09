import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoIssue} from '../models/issuesStatus';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<InfoIssue[]>('http://localhost:9000/issues');
  }
}
