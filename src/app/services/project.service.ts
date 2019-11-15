import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteProject, DependencyWheelData, ID, IssuesStatus, User} from '../models/model';
import {
  DetailGroup,
  CategoryValue,
  Project,
  RegisterGroup,
  RegisterProject,
  InfoIssues,
  Group,
  ProjectFileLines,
  Updating, InfoUpdated, InfoUser, ActivityGroup, ProjectWeightAuthors
} from '../models/Group';
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

  updateInfoGroup(id: number): Observable<InfoUpdated> {
    const request = new ID(id);
    return this.http.post<InfoUpdated>('http://localhost:9000/group/update-projects', request);
  }

  updatingInfoGroup(id: number): Observable<Updating> {
    return this.http.get<Updating>('http://localhost:9000/groups/' + id + '/updating?loading=true');
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

  getUsersGroup(id: number): Observable<InfoUser[]> {
    return this.http.get<InfoUser[]>('http://localhost:9000/groups/' + id + '/users');
  }

  getFilesHotSpots(id: number): Observable<ProjectFileLines[]> {
    return this.http.get<ProjectFileLines[]>('http://localhost:9000/groups/' + id + '/files');
  }

  getActivityGroup(id: number): Observable<ActivityGroup> {
    return this.http.get<ActivityGroup>('http://localhost:9000/groups/' + id + '/activity');
  }

  getRelationsPRs(id: number): Observable<DependencyWheelData[]> {
    return this.http.get<DependencyWheelData[]>('http://localhost:9000/groups/' + id + '/relation-prs');
  }

  getProjectsWeight(id: number): Observable<ProjectWeightAuthors[]> {
    return this.http.get<ProjectWeightAuthors[]>('http://localhost:9000/groups/' + id + '/projects-weight');
  }





  getPosts(): Observable<IssuesStatus[]> {
    return this.http.get<IssuesStatus[]>('http://localhost:9000/issues');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9000/user-issues');
  }
}
