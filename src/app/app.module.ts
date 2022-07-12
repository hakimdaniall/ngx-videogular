import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// NGX VIDEOGULAR MODULES
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VdoPlayerComponent } from './components/vdo-player/vdo-player.component';

// NGX PLAYER MODULES
import { PlyrModule } from 'ngx-plyr';


// Modules
import { LoaderModule } from './components/loader/loader.module';

// Pages
import { NgxVideogularComponent } from './pages/ngx-videogular/ngx-videogular.component';
import { NgxPlyrComponent } from './pages/ngx-plyr/ngx-plyr.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AlertComponent } from './components/alert/alert.component';
import { JwtInterceptor } from './helpers';
import { RegisterComponent } from './pages/register/register.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { WidgetComponent } from './components/widget/widget.component';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalendarPickerComponent } from './components/calendar-picker/calendar-picker.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    VdoPlayerComponent,
    NgxVideogularComponent,
    NgxPlyrComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    SiteHeaderComponent,
    WidgetComponent,
    TimeAgoPipe,
    EmojiPickerComponent,
    ProfileComponent,
    CalendarPickerComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    PlyrModule,
    LoaderModule,
    PickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
