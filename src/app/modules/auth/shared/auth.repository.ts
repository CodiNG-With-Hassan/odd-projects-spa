import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@Environment';
import { Observable } from 'rxjs';
import { AuthResponse } from './models/auth-response.model';
import { SignInDetails, SignUpDetails } from './models/auth-details.model';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  signIn(signInDetails: SignInDetails): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/sign-in`, {
      ...signInDetails,
    });
  }

  signUp(signUpDetails: SignUpDetails): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/sign-up`, {
      ...signUpDetails,
    });
  }
}
