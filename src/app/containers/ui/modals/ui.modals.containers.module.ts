import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalInnerComponent } from './modal-component/modal-inner-component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ModalAuthComponent} from './model-auth/modal-auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ModalAuthComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  entryComponents: [ModalInnerComponent],
  exports: [
    ModalAuthComponent
  ],
})
export class UiModalsContainersModule {}
