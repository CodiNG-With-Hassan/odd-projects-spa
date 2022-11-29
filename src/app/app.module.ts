import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { getInitialState, REDUCER_PROVIDER, reducerToken } from '@AppStore';
import { environment } from '@Environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiTranslateLoader } from './shared/loaders/multi-translate.loader';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEffects } from '@Modules/users/store/users.effects';
import { ModuleRoutes } from '@Enums/routes.enum';
import { userReducer } from '@Modules/users/store/users.reducer';
import { LetModule } from '@ngrx/component';
import {ToastModule} from 'primeng/toast';
import { ErrorFacade } from '@Store/error/error.facade';
import { MessageService } from 'primeng/api';
import { ErrorEffects } from '@Store/error/error.effects';
import { ERROR_HANDLING_INTERCEPTOR_PROVIDER } from './shared/interceptors/error-handling.interceptor';
import { AccessGuard } from './core/guards/access.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: MultiTranslateLoader,
        deps: [HttpClient],
      },
    }),
    EffectsModule.forRoot([UserEffects, ErrorEffects]),
    StoreModule.forRoot(reducerToken, { initialState: getInitialState}),
    StoreModule.forFeature(ModuleRoutes.User, userReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    LetModule,
  ],
  providers: [
    REDUCER_PROVIDER,
    ErrorFacade,
    MessageService,
    ERROR_HANDLING_INTERCEPTOR_PROVIDER,
    AccessGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
