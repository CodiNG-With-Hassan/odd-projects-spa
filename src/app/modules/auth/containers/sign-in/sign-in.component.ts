import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldNames } from '@Enums/fields.enum';
import { AuthFacade } from '@Modules/auth/store/auth.facade';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'odd-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInFormGroup!: FormGroup;
  public pending$: Observable<boolean> = this.authFacade.selectAuthPending$;

  public readonly fieldNames: typeof FieldNames = FieldNames;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade,
  ) {
  }

  ngOnInit(): void {
    this.signInFormGroup = this.initializeFormGroup();
  }

  submitForm(): void {
    this.authFacade.signIn(this.signInFormGroup.value);
  }

  initializeFormGroup(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.Identity]: ['', [Validators.required]],
      [FieldNames.Password]: ['', [Validators.required]],
    });
  }
}
