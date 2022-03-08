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
    if (navigator.userAgent.match(/samsung/i) || navigator.userAgent.match(/apple/i) ) {
      alert("You are using a defective browser (Samsung Internet or Safari) that " +
      "might not be configured to display this website properly. " +
      "You should consider using a proper standards-compliant " +
      "browser instead. \n\n"+
      "We recommend using Firefox, Microsoft Edge, or Google Chrome.");   
    }   
  }
}
