import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input('widgetType') widgetType: string;
  @Input('widgetTitle') widgetTitle: string;
  @Input('widgetNumCount') widgetNumCount: number;

  following = [
    {
      name: 'Abang Portal',
      image: 'icon-1.png'
    },
    {
      name: 'Cikgu Fazillah',
      image: 'icon-2.jpg'
    },
    {
      name: 'Daniel bin Mohamad Rashidi',
      image: 'icon-3.jpg'
    },
    {
      name: 'Nurul Syafiqah binti Mahmud',
      image: 'icon-4.jpg'
    },
    {
      name: 'Noh Salleh',
      image: 'icon-5.jpg'
    },
  ];

  blog = [
    {
      title: 'Are you tired of admonastration?',
      image: 'poster-1.jpg',
      date: new Date('07/24/2021 04:00 PM').toUTCString(),
    },
    {
      title: 'Are you sick of the ass in your assignments?',
      image: 'poster-2.jpg',
      date: new Date('11/24/2021 04:00 PM').toUTCString(),
    },
    {
      title: 'What an EDUCATION!',
      image: 'poster-3.jpg',
      date: new Date('07/30/2021 04:00 PM').toUTCString(),
    },
    {
      title: 'Do your part for art?',
      image: 'poster-4.jpg',
      date: new Date('12/01/2021 04:00 PM').toUTCString(),
    },
    {
      title: 'Back to school!',
      image: 'poster-5.png',
      date: new Date('12/01/2021 04:00 PM').toUTCString(),
    },
  ];

  latestUpdates = [
    {
      user: 'AbangPortal',
      image: 'icon-1.png',
      date: new Date('07/06/2022 04:00 PM').toUTCString(),
    },
    {
      user: 'AbangPortal',
      image: 'icon-1.png',
      date: new Date('07/05/2022 04:00 PM').toUTCString(),
    },
    {
      user: 'AbangPortal',
      image: 'icon-1.png',
      date: new Date('07/04/2022 04:00 PM').toUTCString(),
    },
    {
      user: 'AbangPortal',
      image: 'icon-1.png',
      date: new Date('07/03/2022 04:00 PM').toUTCString(),
    },
    {
      user: 'AbangPortal',
      image: 'icon-1.png',
      date: new Date('07/24/2021 04:00 PM').toUTCString(),
    },
    {
      user: 'Noh Hujan',
      image: 'icon-5.jpg',
      date: new Date('07/24/2020 04:00 PM').toUTCString(),
    },
  ];

  recentActiveMember = [
    {
      path: '',
      image: 'assets/images/following/icon-1.png'
    },
    {
      path: '',
      image: 'assets/images/following/icon-2.jpg'
    },
    {
      path: '',
      image: null
    },
    {
      path: '',
      image: null
    },
    {
      path: '',
      image: null
    },
    {
      path: '',
      image: 'assets/images/following/icon-5.jpg'
    },
    {
      path: '',
      image: 'assets/images/following/icon-3.jpg'
    },
    {
      path: '',
      image: 'assets/images/following/icon-4.jpg'
    },
    {
      path: '',
      image: null
    },
    {
      path: '',
      image: null
    },
  ]

  placeholderImage: string = "assets/images/placeholders/placeholder-person.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
