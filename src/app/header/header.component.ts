import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var menu = document.getElementById("menu_animation");
    var scroll_last = 1;

    window.addEventListener("scroll", function() {
        var scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scroll_top > scroll_last) {
            menu.style.top = "-10vh";
        } else {
            menu.style.top = "0";
        }

        scroll_last = scroll_top;
    })
  }
}
