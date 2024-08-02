import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listPeople = [
    { name: 'Felipe Freitas', age: 26, },
    { name: 'Fulano da Silva', age: 34, },
    { name: 'Jorginho Carvalho', age: 35, },
    { name: 'Joaozinho da Silva', age: 18, },  
  ];


  selectPerson(index: number){
    console.log(index);
  }
  

}


/*

listPessoas = ['Felipe', 'Joao', true, 1000, {nome: 'Fulano'}];
name: string = 'Felipe';

  handleInputChange( event: string){
    console.log(event);

    // ....

    this.name = event.toUpperCase();
  }

minhaProp = true;
  pessoa : any = {
    status: 1,
    name: undefined
  }
  toggleProp(){
    this.minhaProp = !this.minhaProp;
  }
  
  isTruthy(){
    //return {};
    //return [];
    //return true;
    //return 1;
    //return "teste";
    //return 'teste';
    //return NaN;
    //return "0";
    //return "false";
    //return this.pessoa.status;
    return this.pessoa.endereco?.rua;
  }

*/