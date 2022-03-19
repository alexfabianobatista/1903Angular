import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-todo';

  nome = 'Alex Fabiano Batista';

  texto = "";

  public onMouseSpan(){
    this.onMouseOver = !this.isMouseOver;
  }

  public save(valor: string){
    this.texto = valor;
  }

  public digitando = (event: KeyboardEvent) => {
    console.log(event);
    this.texto = (<HTMLInputElement>event.target).value;
  };
}
