import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // fontawesome.com free icons
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;

  ngOnInit(): void {
    // sections appear animation Intersection Observer
    const faders = document.querySelectorAll(".fade_in");

    const appear_options = {
      threshold: 0,
      rootMargin: "0px 0px -400px 0px"
     };

    const appear_on_scroll = new IntersectionObserver(function(entries, appear_on_scroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appear_on_scroll.unobserve(entry.target);
        }

      })
    }, appear_options);

    faders.forEach(fader => {
      appear_on_scroll.observe(fader);
    })

  }
}
