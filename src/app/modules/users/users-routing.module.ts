import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutes } from '@Enums/routes.enum';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  {
    path: UsersRoutes.Empty,
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
