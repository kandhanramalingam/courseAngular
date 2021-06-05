import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {ISidebar} from '../../containers/layout/sidebar/sidebar.service';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  currentUser: any;
  constructor(
    private authService: AuthService
  ) {
    this.authService.getUser().then(data => {this.currentUser = data;
      console.log(this.currentUser);});
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
