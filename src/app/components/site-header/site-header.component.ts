import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  currentUser: User;
  navBarIsShown: boolean = false;

  links = [
    {
      icon: 'bi bi-person',
      label: 'Profile',
      link: '/profile'
    },
    {
      icon: 'bi bi-people',
      label: 'Community',
      link: '#'
    },
    {
      icon: 'bi bi-diagram-3',
      label: 'Groups',
      link: '#'
    },
    {
      icon: 'bi bi-paperclip',
      label: 'Discussion',
      link: '#'
    },
    {
      icon: 'bi bi-person-plus',
      label: 'Connection',
      link: '#'
    },
    {
      icon: 'bi bi-calendar-week',
      label: 'Timetable',
      link: '/timetable'
    },
    {
      icon: 'bi bi-book',
      label: 'Blog',
      link: '#'
    },
    {
      icon: 'bi bi-info-circle',
      label: 'Help & Supports',
      link: '#'
    },
    {
      icon: 'bi bi-play-btn',
      label: 'NGX-Plyr',
      link: '/ngx-plyr'
    },
    {
      icon: 'bi bi-play-btn-fill',
      label: 'NGX-Videogular',
      link: '/ngx-videogular'
    },

  ]

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    if (window.innerWidth > 800) {
      this.navBarIsShown = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  showNavBar() {
    this.navBarIsShown = true;
  }

  hideNavBar() {
    this.navBarIsShown = false;
  }
}
