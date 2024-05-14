import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from '../../shared-state/shared.state';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

  @Select(UserState.user) userState$ !: Observable<User>;

  constructor(private readonly store : Store){}

}
