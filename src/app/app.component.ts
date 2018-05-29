import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { FavoritesPage } from '../pages/favorites/favorites';
import { RecipesPage } from '../pages/Recipes/recipes';
import { CategoriesPage } from '../pages/categories/categories';
import { ChurchesPage } from '../pages/churches/churches';
import { AuthorsPage } from '../pages/authors/authors';
import { EventsPage } from '../pages/events/events';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;

  pages: Array<{ title: string, component: any,icon:any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'md-home', component: HomePage },
      { title: 'Categories', icon:'pricetag', component: CategoriesPage },
      { title: 'Churches', icon:'home',component: ChurchesPage },
      { title: 'Events', icon:'calendar',component: EventsPage},
      { title: 'Authors', icon:'person-add',component: AuthorsPage},
      { title: 'Profile', icon:'md-contact',component: ProfilePage },
      { title: 'Login', icon:'log-in',component: LoginPage },
      { title: 'Change Password', icon:'ios-at',component: ChangepasswordPage},
      { title: 'Recipes', icon:'md-cafe',component: RecipesPage },
      { title: 'Fevorites', icon:'md-heart',component: FavoritesPage},
      { title: 'About', icon:'md-information-circle',component: AboutPage }
  ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  public checkActivePage(page): boolean {
    return page === this.activePage;
  }

}
