import { Profile } from '@Models/profile.model';

export interface JwtData {
  profile: Profile;
  expiryDate: Date;
  exp?: number;
}
