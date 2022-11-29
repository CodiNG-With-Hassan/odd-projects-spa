import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AccessTokenService } from '@Modules/auth/shared/access-token.service';
import { UserFacade } from '@Modules/users/store/users.facade';
import {MenuItem} from 'primeng/api';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'ngt-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] = [];
  onAuthRoute: boolean = false;

  constructor(
    public readonly accessTokenService: AccessTokenService,
    public readonly userFacade: UserFacade,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-folder',
        routerLink: '/projects',
      },
    ];
    this.router.events
      .pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter((event: any) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          this.onAuthRoute = event.url.includes('auth');
        }),
      )
      .subscribe();
  }
}
