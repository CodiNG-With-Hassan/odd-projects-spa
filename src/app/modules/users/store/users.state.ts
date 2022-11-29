import { Profile } from '@Models/profile.model';

export interface UserState {
  user: Profile;
  pending: boolean;
}
