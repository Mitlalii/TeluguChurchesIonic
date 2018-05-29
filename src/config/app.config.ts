import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = { 
  // bannerImageWidth: 256,
  // bannerImageHeight: 256,
  
  serviceBase_Url:{
    //  base_Url:'http://192.168.1.121/TeluguChurches/api/'

    //Test environment
    apiBaseUrl:'http://192.168.1.152/TeluguChurchesTestAPI/api/'
    //base_Url:'http://calibrage.co.in/api//api/'
  }
};
