import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IssuesStatus, User} from '../models/issuesStatus';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }

  getUsers() {
    return this.http.get<User[]>('http://localhost:9000/user-issues');
  }
}
