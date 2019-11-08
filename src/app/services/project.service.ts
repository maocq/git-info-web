import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteProject, ID, IssuesStatus, User} from '../models/model';
import {DetailGroup, CategoryValue, Project, RegisterGroup, RegisterProject, InfoIssues, AuthorGroup, Group, ProjectFileLines}
  from '../models/Group';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  registerGroup(request: RegisterGroup): Observable<Group> {
    return this.http.post<Group>('http://localhost:9000/group/register', request);
  }

  updateGroup(request: Group): Observable<Group> {
    return this.http.post<Group>('http://localhost:9000/group/update', request);
  }

  deleteGroup(id: number): Observable<Group> {
    const request = new ID(id);
    return this.http.post<Group>('http://localhost:9000/group/delete', request);
  }

  registerProject(request: RegisterProject): Observable<Project> {
    return this.http.post<Project>('http://localhost:9000/project/register', request);
  }

  deleteProject(request: DeleteProject): Observable<Project> {
    return this.http.post<Project>('http://localhost:9000/project/delete', request);
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://localhost:9000/groups');
  }

  getGroup(id: number): Observable<DetailGroup> {
    return this.http.get<DetailGroup>('http://localhost:9000/groups/' + id);
  }

  getInfoGroup(id: number): Observable<Group> {
    return this.http.get<Group>('http://localhost:9000/groups/' + id + '/info');
  }

  getImpactGroup(id: number): Observable<CategoryValue[]> {
    return this.http.get<CategoryValue[]>('http://localhost:9000/groups/' + id + '/impact');
  }

  getIssuesGroup(id: number): Observable<InfoIssues> {
    return this.http.get<InfoIssues>('http://localhost:9000/groups/' + id + '/issues');
  }

  getAuthorsGroup(id: number): Observable<AuthorGroup[]> {
    return this.http.get<AuthorGroup[]>('http://localhost:9000/info-users');
  }

  getFilesHotSpots(id: number): Observable<ProjectFileLines[]> {
    return this.http.get<ProjectFileLines[]>('http://localhost:9000/groups/' + id + '/files');
  }





  getPosts(): Observable<IssuesStatus[]> {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9000/user-issues');
  }
}
