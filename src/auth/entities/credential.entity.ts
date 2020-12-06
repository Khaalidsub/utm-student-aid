import { ICredential } from '../types';

export class Credential implements ICredential {
  password: string;

  email: string;
}
