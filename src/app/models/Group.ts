
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

export interface Group {
  id: number;
  name: string;
  createdAt: string;
}

export interface UpdatingGroup {
  updating: boolean;
}

export interface RegisterGroup {
  name: string;
}

export interface CategoryValue {
  category: string;
  value: number;
}

export interface InfoIssues {
  issuesClosed: CategoryValue[];
  users: CategoryValue[];
}

export interface AuthorGroup {
  user: string;
  commits: number;
  additions: number;
  deletions: number;
}

export interface FileLines {
  file: string;
  lines: number;
}

export interface ProjectFileLines {
  project: string;
  lines: FileLines[];
}

export interface InfoUpdated {
  message: string;
  updated: number;
}


/*
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
 */

export interface RegisterProject {
  id: number;
  groupId: number;
}
