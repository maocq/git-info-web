
export interface Project {
  id: number;
  description: string;
  name: string;
  nameWithNamespace: string;
  path: string;
  pathWithNamespace: string;
  createdAt: string;
  defaultBranch: string;
  sshUrlToRepo: string;
  httpUrlToRepo: string;
  webUrl: string;
  groupId: number;
}

export interface Numbers {
  numberCommits: number;
  numberAuthors: number;
  numberIssues: number;
  numberPrs: number;
}

export interface Lines {
  additions: number;
  deletions: number;
  total: number;
}

export interface File {
  name: string;
  weight: number;
}

export interface DetailGroup {
  projects: Project[];
  firstCommit: string;
  lastCommit: string;
  numbers: Numbers;
  lines: Lines;
  files: File[];
}
