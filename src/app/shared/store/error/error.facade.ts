import { Injectable } from '@angular/core';
import { State } from '@Models/store.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearError, setError } from './error.actions';
import { selectError } from './error.selector';

@Injectable()
export class ErrorFacade {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public selectError$: Observable<any> = this.store.pipe(select(selectError));

  constructor(
    private readonly store: Store<State>,
  ) {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setError(error: any): void {
    this.store.dispatch(setError({ error }));
  }

  public clearError(): void {
    this.store.dispatch(clearError());
  }
}
