import { User } from 'src/app/core/models/user.model';

export interface Session {
  token: string;
  user: User;
}
