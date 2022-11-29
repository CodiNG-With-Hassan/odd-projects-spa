import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@Environment';
import { UserFacade } from '@Modules/users/store/users.facade';
import { AccessTokenService } from '@Modules/auth/shared/access-token.service';
import { Profile } from '@Models/profile.model';
import { ErrorFacade } from '@Store/error/error.facade';

@Component({
  selector: 'odd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private readonly translateService: TranslateService,
    private readonly userFacade: UserFacade,
    private readonly accessTokenService: AccessTokenService,
    private readonly errorFacade: ErrorFacade,
  ) {
  }

  ngOnInit(): void {
    if(this.accessTokenService.isLoggedIn()) {
      this.accessTokenService.decodeAccessToken(this.accessTokenService.getAccessToken());
      this.userFacade.setUser(<Profile>this.accessTokenService.accessTokenData?.profile);
    }

    this.translateService.setDefaultLang(environment.defaultLanguage);

    this.translateService.use(environment.defaultLanguage);
    this.errorFacade.setError('');
  }

  clearError(): void {
    this.errorFacade.clearError();
  }
}
