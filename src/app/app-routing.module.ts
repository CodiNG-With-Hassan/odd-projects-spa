import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { ModuleType } from '@Types/module.type';

import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: AppRoutes.Empty,
    pathMatch: 'full',
    redirectTo: ModuleRoutes.Home,
  },
  {
    path: ModuleRoutes.Home,
    loadChildren: (): Promise<ModuleType> => import('./modules/home/home.module')
      .then((module: ModuleType): ModuleType => module.HomeModule),
  },
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<ModuleType> => import('./modules/auth/auth.module')
      .then((module: ModuleType): ModuleType => module.AuthModule),
  },
  {
    path: ModuleRoutes.User,
    loadChildren: (): Promise<ModuleType> => import('./modules/users/users.module')
      .then((module: ModuleType): ModuleType => module.UsersModule),
  },
  {
    path: ModuleRoutes.Projects,
    loadChildren: (): Promise<ModuleType> => import('./modules/projects/projects.module')
      .then((module: ModuleType): ModuleType => module.ProjectsModule),
  },
  {
    path: AppRoutes.Other,
    redirectTo: AppRoutes.NotFound,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
