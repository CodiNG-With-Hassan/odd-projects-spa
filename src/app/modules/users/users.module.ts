import { NgModule } from '@angular/core';
import { ModuleRoutes } from '@Enums/routes.enum';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './store/users.effects';
import { userReducer } from './store/users.reducer';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './containers/user/user.component';
import { ModuleType } from '@Types/module.type';
import { CardModule } from 'primeng/card';
import { LetModule } from '@ngrx/component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const primeNGModules: ModuleType[] = [
  CardModule,
  ButtonModule,
  InputTextModule,
];

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    ...primeNGModules,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LetModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(ModuleRoutes.User, userReducer),
  ],
})
export class UsersModule {
}
