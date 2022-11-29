import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldNames } from '@Enums/fields.enum';
import { AuthFacade } from '@Modules/auth/store/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'odd-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup!: FormGroup;
  public pending$: Observable<boolean> = this.authFacade.selectAuthPending$;

  public readonly fieldNames: typeof FieldNames = FieldNames;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly authFacade: AuthFacade,
  ) {
  }

  ngOnInit(): void {
    this.signUpFormGroup = this.initializeFormGroup();
  }

  submitForm(): void {
    this.authFacade.signUp(this.signUpFormGroup.value);
  }

  initializeFormGroup(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.FirstName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.LastName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.Username]: ['', [Validators.required]],
      [FieldNames.Email]: ['', [Validators.required, Validators.email]],
      [FieldNames.Password]: ['', [Validators.required]],
    });
  }
}
