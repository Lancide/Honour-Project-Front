export class Result {
  database: string;

  columns: string[];

  result: [];
  // result: {};
  constructor(database: string, result: [], columns: string[]) {
    this.database = database;
    this.result = result;
    this.columns = columns;
    // this.result = result;
  }
}
