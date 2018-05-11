import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SchedulePage } from '../pages/schedule/schedule';
import { SessionPage } from '../pages/session/session';
import { AgendaPage } from '../pages/agenda/agenda';
import { TabBar } from '../pages/tabbar/tabbar';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    SessionPage,
    AgendaPage,
    TabBar
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    SessionPage,
    AgendaPage,
    TabBar
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
