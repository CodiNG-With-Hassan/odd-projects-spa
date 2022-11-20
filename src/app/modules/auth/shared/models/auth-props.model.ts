import { SignInDetails, SignUpDetails } from './auth-details.model';
import { AuthResponse } from './auth-response.model';

export interface SignInProps {
  signInDetails: SignInDetails;
}

export interface SignInSuccessProps {
  response: AuthResponse;
}

export interface SignUpProps {
  signUpDetails: SignUpDetails;
}

export interface SignUpSuccessProps {
  response: AuthResponse;
}
