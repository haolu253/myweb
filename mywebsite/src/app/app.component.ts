import { Component } from '@angular/core';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebsite';

  ngOnInit(){
    AOS.init();
  }
}
