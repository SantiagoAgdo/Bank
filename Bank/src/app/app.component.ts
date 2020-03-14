import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank';
  despliegueAlerta: boolean = false;
  usuario: string = "";
  contrasena:string = "";

  forget() {
    this.despliegueAlerta = true;
    setTimeout(() => {
      this.despliegueAlerta = false;
    }, 5000);
  }
}
