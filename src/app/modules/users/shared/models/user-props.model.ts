import { Profile } from '@Models/profile.model';
import { AuthResponse } from '@Modules/auth/shared/models/auth-response.model';

export interface SetUserProps {
  user: Profile;
}

export interface SetUserSuccessProps {
  user: Profile;
}

export interface EditUserProps {
  editedUser: Partial<Profile>;
}

export interface EditUserSuccessProps {
  user: Profile;
}
