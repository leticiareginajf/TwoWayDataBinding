import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 
  pessoa = {
    name: 'Felipe',
    status: 1,
    
  }

  pessoa2 = {
    name: 'Mateus',
    status: 2,
    
  }

  pessoa3 = {
    name: 'Luis',
    status: 3,
    
  }

  

}


/*



***PIPE****

getStyle(status: number){

    console.log('getStyle');

    return {
        'active': status === 1,
        'partial': status === 2,
        'blocked': status === 3,
    }
  }


  *******

 text = 'Felipe';

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


  ngFor com input e output


  //personSelectedIndex: number = -0;
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Felipe Freitas', age: 26, },
    { name: 'Fulano da Silva', age: 34, },
    { name: 'Jorginho Carvalho', age: 35, },
    { name: 'Joaozinho da Silva', age: 18, },  
  ];


  selectPerson(index: number){
    console.log(index);
    
    this.personSelectedIndex = index;
  }


fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';

  increaseFontSize(){

    this.fontSize += 5;

  }

  toggleFontColor(){

    if(this.textColor === 'white'){
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else{
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }

  }


*/