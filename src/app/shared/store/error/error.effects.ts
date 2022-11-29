import { Injectable } from '@angular/core';
import { SetErrorActionType } from '@Models/action.types';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { ErrorActionsTypes } from './error.actions';
import {MessageService} from 'primeng/api';

@Injectable()
export class ErrorEffects {
  public setError$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(ErrorActionsTypes.SetError),
          map((action: SetErrorActionType) => action.error),
          tap(() => {
            this.messageService.add({
              summary: 'summary',
              severity: 'error',
              detail: 'detail',
              key: 'error-toast',
              life: 9999999,
              sticky: true,
              closable: true,
            });
          }),
        )
    ),
    { dispatch: false },
  );

  public clearError$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(ErrorActionsTypes.ClearError),
          tap(() => {
            this.messageService.clear('error-toast');
          }),
        )
    ),
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly messageService: MessageService,
  ) {
  }
}
