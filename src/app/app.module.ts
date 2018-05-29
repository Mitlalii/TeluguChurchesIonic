import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { RecipesService } from '../providers/recipes.service';
import { RecipesPage } from '../pages/Recipes/recipes';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { DataService } from '../providers/data.service';
import { CategoriesPage } from '../pages/categories/categories';
import { ChurchesPage } from '../pages/churches/churches';
import { EventsPage } from '../pages/events/events';
import { AuthorsPage } from '../pages/authors/authors';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { SignupPage } from '../pages/signup/signup';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    ChurchesPage,
    EventsPage,
    AuthorsPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    ChangepasswordPage,
    RecipesPage,
    AboutPage,
    FavoritesPage,
    SettingsPage,
    RecipeDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    ChurchesPage,
    EventsPage,
    AuthorsPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    ChangepasswordPage,
    RecipesPage,
    AboutPage,
    FavoritesPage,
    SettingsPage,
    RecipeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpModule,
    RecipesService,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
