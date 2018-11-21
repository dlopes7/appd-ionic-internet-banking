import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log(window);
      
      (<any>window).plugins.ADEUMMobilePlugin.initWithConfiguration(
        {
           "appKey": "AD-AAB-AAM-YEA",
           "collectorUrl": "https://eum-col.appdynamics.com",
           "screenshotUrl": "https://eum-image.appdynamics.com",
           "screenshots": true,
           "loggingLevel": 4  
         },
         (success) => {
            console.log("initWithConfiguration return: success");
         },
         (error) => {
            console.error("initWithConfiguration error:" + error);
         }
    ); 
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
