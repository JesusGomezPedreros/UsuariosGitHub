import { Component } from '@angular/core';
import { usuariosGit } from './Modelos/usuariosViewModel';
import { UsuariosService } from './Servicios/usuarios.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombreUsuario:any;
  public usuarioDatos : usuariosGit={} as usuariosGit;
  public error: any;
  public mostrar : any;
  constructor(private servicios: UsuariosService) { }
  buscarUsuarios(nombre: string) {
   
      this.servicios.getUsuarios(nombre).pipe(
        catchError((error) => {
          if (error.status !== 200) {
            console.log('La solicitud no fue exitosa. El código de estado es ' + error.status);
            this.mostrar = false;
          }
          return throwError(alert('Usuario No Encontrado')
          
          );
        })
      )
      .subscribe((data) => {
        this.mostrar = true;
        this.usuarioDatos = data;
        console.log(data);
      });

  }
}
