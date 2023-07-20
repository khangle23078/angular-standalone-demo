import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  base_url = enviroment.API_URL;
  title = 'angular-standalone';
}
