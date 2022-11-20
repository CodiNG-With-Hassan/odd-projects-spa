import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngt-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Input() form!: FormGroup;
  @Input() pending: boolean = false;
  @Input() label: string = '';

  @Output() submitForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public submit(): void {
    this.submitForm.emit();
  }
}
