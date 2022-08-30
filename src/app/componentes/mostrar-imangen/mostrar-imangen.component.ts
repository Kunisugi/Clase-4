import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-imangen',
  templateUrl: './mostrar-imangen.component.html',
  styleUrls: ['./mostrar-imangen.component.scss']
})
export class MostrarImangenComponent {

  @Input() public imagen: string = '';

  private imagenError: string= 'https://www.redeszone.net/app/uploads-redeszone.net/2021/09/Error-404-01-e1633683457508.jpg?x=480&quality=40';

  public cambiarImagenError(): void{
    this.imagen = this.imagenError;
  }



}
