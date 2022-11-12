export interface IDecoded {
  email: string;
  exp: number;
  iat: number;
  name: string;
}

export interface IAuthContext {
  signed: boolean | null;
  login( email: any, password: any ): void;
  userData: any;
}