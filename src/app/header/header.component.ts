import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faHome, faAddressCard, faLaptopCode,  faCode, faPhoneSquareAlt, faChevronUp} from '@fortawesome/free-solid-svg-icons';

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
  faChevronUp = faChevronUp;

  ngOnInit(): void {
    // Header appear on scroll
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

    // Mobile menu icon animation
    var icon = document.querySelector(".mobile_menu_icon");
    var arrow = document.querySelector(".mobile_arrow");
    var mobile_menu = document.querySelector(".mobile_menu");
    var mobile_menu_items = document.querySelectorAll(".mobile_menu_items li a");

    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    })

    arrow.addEventListener("click", () => {
      icon.classList.remove("active");
      mobile_menu.classList.remove("active");
    })

    mobile_menu_items.forEach(item => {
      item.addEventListener("click", () => {
        icon.classList.remove("active");
        mobile_menu.classList.remove("active");
      })
    })
  }
}
