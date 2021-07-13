export interface IUsabilityDeclaration {
  url: string;
  evaluated: boolean;
}

export class UsabilityDeclaration implements IUsabilityDeclaration {
  evaluated: boolean;
  url: string;

  constructor(url: string, evaluated: boolean) {
    this.url = url;
    this.evaluated = evaluated;
  }
}
