import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidenavDrawerOverviewExample} from './sidenav/app.sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    
    SidenavDrawerOverviewExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [
    provideClientHydration()
  ],
 // bootstrap: [AppComponent]
})
export class AppModule { }
