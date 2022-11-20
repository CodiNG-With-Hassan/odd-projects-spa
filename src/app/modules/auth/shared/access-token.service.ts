import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { TokenKeys } from '@Enums/tokens.enum';
import { CookieService } from 'ngx-cookie-service';
import { JwtData } from './models/jwt-data.model';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  public accessTokenData: JwtData | undefined = undefined;

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router,
  ) {
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public decodeAccessToken(accessToken: string): void {
    const decodedAccessToken: JwtData = jwtDecode.default(accessToken);

    this.accessTokenData = {
      profile: decodedAccessToken.profile,
      expiryDate: moment.unix(<number>decodedAccessToken.exp).toDate(),
    };
  }

  public setAccessToken(accessToken: string): void {
    this.cookieService.set(TokenKeys.JwtCookie, accessToken, this.accessTokenData?.expiryDate, '/');
  }

  public deleteAccessToken(): void {
    this.cookieService.delete(TokenKeys.JwtCookie);

    this.router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
  }

  public getAccessToken(): string {
    return this.cookieService.get(TokenKeys.JwtCookie);
  }
}
