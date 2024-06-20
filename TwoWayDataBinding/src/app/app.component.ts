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
  
  isTruthy(){
    //return {};
    //return [];
    //return true;
    //return 1;
    //return "teste";
    return 'teste';
    //return "0";
    //return "false";
    //return this.pessoa.status;
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