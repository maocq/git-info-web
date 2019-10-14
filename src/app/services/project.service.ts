import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Group, IssuesStatus, User} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get<Group[]>('http://localhost:9000/groups');
  }

  getGroup(id: number) {
    return this.http.get<any[]>('http://localhost:9000/groups/' + id);
  }

  getPosts() {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }

  getUsers() {
    return this.http.get<User[]>('http://localhost:9000/user-issues');
  }
}
