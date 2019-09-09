
export interface IssuesStatus {
  status: string;
  infoIssue: InfoIssue[];
}

export interface InfoIssue {
  state: string;
  date: string;
  count: number;
}
