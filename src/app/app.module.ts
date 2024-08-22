import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { HeaderNavComponent } from './components/menu-header/header-nav/header-nav.component';
import { CardComponent } from './components/card/card.component';
import { IsExclusiveComponent } from './components/card/is-exclusive/is-exclusive.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';

@NgModule({
  declarations: [AppComponent, MenuHeaderComponent, HeaderNavComponent, CardComponent, IsExclusiveComponent, CardFooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
