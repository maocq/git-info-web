
export class LineSerie {
  constructor(public name: string, public data: number[][]) {
  }
}

export class DataC {
  constructor(public name: string, public y: number) {
  }
}

export class ID {
  constructor(public id: number) {
  }
}

export class NameValue {
  constructor(public name: string, public value: number) {
  }
}

export class SerieNameValue {
  constructor(public name: string, public data: NameValue[]) {
  }
}

//Borrar hacia abajo


export interface IssuesStatus {
  status: string;
  infoIssue: InfoIssue[];
}

export interface InfoIssue {
  state: string;
  date: string;
  count: number;
}

export interface User {
  user: string;
  count: number;
}
