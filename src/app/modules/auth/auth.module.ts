import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import {CardModule} from 'primeng/card';
import { ModuleType } from '@Types/module.type';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ModuleRoutes } from '@Enums/routes.enum';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { AuthRepository } from './shared/auth.repository';
import { SharedModule } from 'app/shared/shared.module';
import { UserEffects } from '@Modules/users/store/users.effects';
import { userReducer } from '@Modules/users/store/users.reducer';
import { ToastModule } from 'primeng/toast';

const primengModules: ModuleType = [
  CardModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,
  DividerModule,
  ToastModule,
];

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects, UserEffects]),
    StoreModule.forFeature(ModuleRoutes.Auth, authReducer),
    StoreModule.forFeature(ModuleRoutes.User, userReducer),
    CommonModule,
    ...primengModules,
  ],
  providers: [
    AuthFacade,
    AuthRepository,
  ],
})
export class AuthModule {
}
