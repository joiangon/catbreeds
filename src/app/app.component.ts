import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.showSplash();
  }

  public async showSplash() {
    await SplashScreen.show({
      showDuration: 1000,
      autoHide: true,
    })
  }
}
