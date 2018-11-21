import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public api: RestApiService, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    
    await loading.present();
    await this.api.doLogin('david', '123')
      .subscribe(res => {
        console.log(res);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
