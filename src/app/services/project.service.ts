import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Group, IssuesStatus, User} from '../models/model';
import {DetailGroup, CategoryValue, Project, RegisterGroup, RegisterProject, InfoIssues} from '../models/Group';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  registerGroup(request: RegisterGroup): Observable<Group> {
    return this.http.post<Group>('http://localhost:9000/group/register', request);
  }

  registerProject(request: RegisterProject): Observable<Project> {
    return this.http.post<Project>('http://localhost:9000/project/register', request);
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://localhost:9000/groups');
  }

  getGroup(id: number): Observable<DetailGroup> {
    return this.http.get<DetailGroup>('http://localhost:9000/groups/' + id);
  }

  getImpactGroup(id: number): Observable<CategoryValue[]> {
    return this.http.get<CategoryValue[]>('http://localhost:9000/groups/' + id + '/impact');
  }

  getIssuesGroup(id: number): Observable<InfoIssues> {
    return this.http.get<InfoIssues>('http://localhost:9000/groups/' + id + '/issues');
  }




  getPosts(): Observable<IssuesStatus[]> {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9000/user-issues');
  }
}
