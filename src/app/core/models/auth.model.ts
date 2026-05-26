import { User } from './user.model';

export interface AuthResponse {
  readonly accessToken: string;

  readonly refreshToken: string;

  readonly user: User;
}
