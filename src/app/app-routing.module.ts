import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgxPlyrComponent } from './pages/ngx-plyr/ngx-plyr.component';
import { NgxVideogularComponent } from './pages/ngx-videogular/ngx-videogular.component';
import { AuthGuard } from './helpers';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimetableComponent } from './pages/timetable/timetable.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ngx-videogular',
    component: NgxVideogularComponent
  },
  {
    path: 'ngx-plyr',
    component: NgxPlyrComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
