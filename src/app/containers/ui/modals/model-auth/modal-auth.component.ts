import {AfterContentInit, ChangeDetectorRef, EventEmitter, Component, Input, OnDestroy, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthForm} from '../../../../constants/modals';
import {LangService} from '../../../../shared/lang.service';
import {combineLatest, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../shared/auth.service';


@Component({
  selector: 'app-modal-auth',
  styleUrls: ['./modal-auth.component.css'],
  templateUrl: './modal-auth.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ModalAuthComponent implements AfterContentInit, OnDestroy{
  showingFormof: AuthForm = AuthForm.LOGIN;
  @Input() styleClass = '';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  subscriptions: Subscription[] = [];
  form: FormGroup = new FormGroup({});
  get formControl(): any {return this.form.controls; }
  constructor(
    private modalService: BsModalService,
    private langService: LangService,
    private changeDetection: ChangeDetectorRef,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }
  ngAfterContentInit(): void {
  }
  onLoginFormSubmit(): void {
    if (this.form.invalid) { return; }
    this.authService.signIn(this.form.value).subscribe(
      resData => {
        // a
      },
      error => {
        // err
      }
    );
  }
  onRegisterFormSubmit(): void {
    if (this.form.invalid) { return; }
  }
  onForgotFormSubmit(): void {
    if (this.form.invalid) { return; }
  }
  get isLoginForm(): boolean {
    return this.showingFormof === AuthForm.LOGIN;
  }
  get isRegisterForm(): boolean {
    return this.showingFormof === AuthForm.REGISTER;
  }
  get isForgotForm(): boolean {
    return this.showingFormof === AuthForm.FORGOT;
  }
  openModal(template: TemplateRef<any>): void {
    let combine: Subscription;
    combine = combineLatest([
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ]).subscribe(() => this.changeDetection.markForCheck());
    this.subscriptions.push(
      this.modalService.onShow.subscribe((reason: string) => {
        this.showingFormof = AuthForm.LOGIN;
        this.form = this.fb.group({
          email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
          password: ['', [Validators.minLength(4)]]
        });
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe((reason: string) => {
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {

      })
    );
    this.subscriptions.push(combine);
    this.modalRef = this.modalService.show(template, this.config);
  }
  showRegisterForm(): void{
    this.showingFormof = AuthForm.REGISTER;
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['', [Validators.minLength(4)]]
    });
  }
  showLoginForm(): void{
    this.showingFormof = AuthForm.LOGIN;
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['', [Validators.minLength(4)]]
    });
  }
  showForgotPassword(): void{
    this.showingFormof = AuthForm.FORGOT;
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]]
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
