import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MenubarModule} from 'primeng/menubar';
import { ModuleType } from '@Types/module.type';
import {AvatarModule} from 'primeng/avatar';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { ButtonModule } from 'primeng/button';
import { UserFacade } from '@Modules/users/store/users.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PrimengModules: ModuleType = [
  MenubarModule,
  ButtonModule,
  AvatarModule,
];

@NgModule({
  declarations: [
    NotFoundComponent,
    LayoutComponent,
    SubmitButtonComponent,
  ],
  imports: [
    PrimengModules,
    CommonModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    UserFacade,
  ],
  exports: [
    LayoutComponent,
    SubmitButtonComponent,
  ],
})
export class SharedModule {
}
