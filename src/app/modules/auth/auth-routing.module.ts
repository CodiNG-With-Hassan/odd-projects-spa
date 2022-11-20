import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from '@Enums/routes.enum';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: SignInComponent,
  },
  {
    path: AuthRoutes.SignUp,
    component: SignUpComponent,
  },
  {
    path: AuthRoutes.Empty,
    redirectTo: AuthRoutes.SignUp,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
