import { Component } from '@angular/core';
import{HistoriaImagen} from './interfaces.modelos/historia-imagen'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public elementoGuardado: Array<HistoriaImagen> = [];

  public nuevoHistorial: HistoriaImagen = {
    nombre:' ',
    detalle: ' ',
    imagen: ''
  }
  public cambiarNombre(event: Event): void{
    const nombre = event.target as HTMLInputElement;
    this.nuevoHistorial.nombre = nombre.value;
  }
  public cambiarDetalle(event: Event): void{
    const detalle = event.target as HTMLInputElement;
    this.nuevoHistorial.detalle = detalle.value;
  }
  public cambiarImagen(event: Event): void{
    const imagen = event.target as HTMLInputElement;
    this.nuevoHistorial.imagen = imagen.value;
  }
  public guardarHistorial(): void{
    //1 nivel
  const copia: HistoriaImagen =  {
    ...this.nuevoHistorial
  }
  copia.id = this.elementoGuardado.length + 1;
  this.elementoGuardado.push(copia);
  this.nuevoHistorial.nombre= '';
  this.nuevoHistorial.detalle= '';
  this.nuevoHistorial.imagen= '';

  }



  public imagen1: string= 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl';
  public imagen : string= 'https://images.ecestaticos.com/J51MKchWSGA9o_AmoApwmBWzyes=/0x0:640x360/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3a%2F56d%2Fa61%2Fb3a56da612b260e9cfcbdb4f05e84335.jpg';
  public imagen2: string= 'https://estaticos.muyinteresante.es/uploads/images/article/600033325bafe872e9c3bf12/gatitoredes.jpg';
  public imagen3: string = 'https://www.enelradar.com/__export/1642714080818/sites/elimparcial/img/2022/01/20/whatsapp_image_2022-01-20_at_2_24_39_pm_1.jpg_1359985831.jpg';
  public imagen4: string = 'https://www.migatapersa.com/wp-content/uploads/2018/07/gato-blanco-Sphynx-1.png';
}
