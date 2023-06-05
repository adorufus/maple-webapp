import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import { Router } from '@angular/router';

interface content {
  title: string;
  sub_title: string;
  content: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  currentSection = 'home';

  heading: string = 'What Client Says';
  content: string = 'It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.';
  contentData: content[] = [
    {
      title: 'Powering Business',
      sub_title: 'Find Your Element',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." + '\n' + "Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde."
    },
    {
      title: 'To Grow Business',
      sub_title: 'Multi purpose theme',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." + '\n' + " Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.",
    },
    {
      title: 'With Online Customers',
      sub_title: 'Start Connecting',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." + '\n' + " Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.",
    }
  ];

  /**
   * owl carousel slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (navbar !== null) {
        navbar.classList.add('nav-sticky');
      }
    }
    else {
      if (navbar !== null) {
        navbar.classList.remove('nav-sticky');
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav !== null) {
      nav.classList.toggle('show');
    }
  }

  onNavClick(routeName: string){
    this.router.navigate([`/${routeName}`])
    this.currentSection = routeName
  }

}
