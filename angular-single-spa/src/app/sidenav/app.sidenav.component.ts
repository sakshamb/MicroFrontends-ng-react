import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Basic drawer */
@Component({
  selector: 'sidenav-drawer-overview-example',
  templateUrl: 'app.sidenav.component.html',
  styleUrl: 'app.sidenav.component.css',
})
export class SidenavDrawerOverviewExample {
  events: string[] = [];
  opened: boolean=true;

}