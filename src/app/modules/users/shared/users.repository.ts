import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@Environment';
import { Profile } from '@Models/profile.model';
import { AuthResponse } from '@Modules/auth/shared/models/auth-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersRepository {

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  editUser(editedUser: Partial<Profile>): Observable<AuthResponse> {
    return this.httpClient.patch<AuthResponse>(`${environment.apiUrl}/user`,
      {
        ...editedUser,
      },
    );
  }
}
