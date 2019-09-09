import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IssuesStatus} from '../models/issuesStatus';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }
}
