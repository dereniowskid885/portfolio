import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sectionOne = document.querySelector(".section_title");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-250px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        console.log(entry.target);
      })
    }, options);

    observer.observe(sectionOne);

  }
}
