import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faHome, faAddressCard, faLaptopCode,  faCode, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // fontawesome.com free icons
  faHome = faHome;
  faAddressCard = faAddressCard;
  faLaptopCode = faLaptopCode;
  faCode = faCode;
  faPhoneSquareAlt = faPhoneSquareAlt;

  ngOnInit(): void {
    var menu = document.getElementById("header_animation");
    var scroll_last = 1;

    window.addEventListener("scroll", function() {
        var scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scroll_top > scroll_last) {
            menu.style.top = "-8vh";
        } else {
            menu.style.top = "0";
        }

        scroll_last = scroll_top;
    })
  }
}
