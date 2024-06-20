import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  minhaProp = true;

  toggleProp(){
    this.minhaProp = !this.minhaProp;
  }
  

}


/*

name: string = 'Felipe';

  handleInputChange( event: string){
    console.log(event);

    // ....

    this.name = event.toUpperCase();
  }



*/