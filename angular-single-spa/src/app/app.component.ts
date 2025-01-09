import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule,MatToolbarModule,MatIconModule,MatListModule,BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
  title = 'app-root';
  events: string[] = [];
  opened: boolean=true;
 
}
