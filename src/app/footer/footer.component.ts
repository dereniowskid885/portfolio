import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faLaptopCode,  faCode, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
  }

  // fontawesome.com free icons
  faHome = faHome;
  faAddressCard = faAddressCard;
  faLaptopCode = faLaptopCode;
  faCode = faCode;
  faPhoneSquareAlt = faPhoneSquareAlt;
  
  ngOnInit(): void {

  }
}
