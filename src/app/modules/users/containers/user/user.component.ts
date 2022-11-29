import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldNames } from '@Enums/fields.enum';
import { Profile } from '@Models/profile.model';
import { UserFacade } from '@Modules/users/store/users.facade';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'odd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  public editProfileForm!: FormGroup;
  public editMode: boolean = false;
  public pending$: Observable<boolean> = this.userFacade.selectUserPending$;

  public readonly fieldNames: typeof FieldNames = FieldNames;

  private user!: Profile;

  constructor(
    public readonly userFacade: UserFacade,
    public readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.editProfileForm = this.initializeEditProfileFormGroup();
    this.userFacade.selectUser$
      .pipe(
        tap((user: Profile) => {
          this.user = user;
        }),
      ).subscribe();
  }

  enableEditMode(): void {
    console.log(this.user);
    this.editProfileForm.patchValue({
      [FieldNames.FirstName]: this.user.firstName,
      [FieldNames.LastName]: this.user.lastName,
      [FieldNames.Email]: this.user.email,
      [FieldNames.Username]: this.user.username,
    });
    this.editMode = true;
  }

  submitForm(): void {
    this.editMode = false;
    console.log(this.editProfileForm.value);
  }

  initializeEditProfileFormGroup(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.FirstName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.LastName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.Email]: ['', [Validators.required, , Validators.email]],
      [FieldNames.Username]: ['', [Validators.required]],
    });
  }
}
