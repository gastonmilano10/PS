import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MiproviderProvider } from '../providers/miprovider/miprovider';
import { TabProvider } from '../providers/tab/tab';
import { Pagina2PageModule } from '../pages/pagina2/pagina2.module';
import { PaginaActionSheetPage } from '../pages/pagina-action-sheet/pagina-action-sheet';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaginaActionSheetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Pagina2PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaginaActionSheetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiproviderProvider,
    MiproviderProvider,
    TabProvider
  ]
})
export class AppModule {}
