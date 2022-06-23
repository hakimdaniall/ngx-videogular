import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPlyrComponent } from './pages/ngx-plyr/ngx-plyr.component';
import { NgxVideogularComponent } from './pages/ngx-videogular/ngx-videogular.component';

const routes: Routes = [
  {
    path: '',
    component: NgxVideogularComponent
  },
  {
    path: 'ngx-plyr',
    component: NgxPlyrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
