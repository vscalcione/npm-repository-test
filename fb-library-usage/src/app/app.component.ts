import { Component } from '@angular/core';
import { UtilsService } from 'fb-library-test-npm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fb-library-usage';
  opened = true;
  constructor(public utils: UtilsService){
    console.log(utils.add(2, 3));
  }
}
