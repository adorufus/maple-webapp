import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface content {
  title: string;
  sub_title: string;
  content: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private fAuth: AngularFireAuth) {}

  user?: any;

  currentSection = 'home';

  heading: string = 'What Client Says';
  content: string =
    'It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.';
  contentData: content[] = [
    {
      title: 'Powering Business',
      sub_title: 'Find Your Element',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        '\n' +
        'Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.',
    },
    {
      title: 'To Grow Business',
      sub_title: 'Multi purpose theme',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        '\n' +
        ' Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.',
    },
    {
      title: 'With Online Customers',
      sub_title: 'Start Connecting',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        '\n' +
        ' Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.',
    },
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
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 1,
      },
    },
    nav: false,
  };

  ngOnInit(): void {
    this.fAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef

  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      if (navbar !== null) {
        navbar.classList.add('nav-sticky');
      }
    } else {
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

  onNavClick(routeName: string) {
    routeName == 'media'
      ? this.router.navigate([`/${routeName}`], {
          queryParams: { segment: 'All' },
        })
      : this.router.navigate([`/${routeName}`]);
    this.currentSection = routeName;
  }

  onAboutClick() {
    this.router.navigate(['/home-company']);
    setTimeout(() => {
    window.scrollTo(0,1080);
    }, 100);
  }

  onCollabClick() {
    this.router.navigate(['/home-company']);
    setTimeout(() => {
      window.scrollTo(0, 2843);
    }, 100);
  }

  onContactClick() {
    this.router.navigate(['/home-company']);
    setTimeout(() => {
      window.scrollTo(0, 3650);
    }, 100);
  }

  onLoginClick() {
    this.router.navigate(['/auth']);
  }
}
