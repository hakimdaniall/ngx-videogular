import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imagePath: string = 'https://lms.ekelas.com.my/wp-content/uploads/buddypress/members/50363/cover-image/6286ecb58f9b3-bp-cover-image.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
