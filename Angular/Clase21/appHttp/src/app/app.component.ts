import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface IUsuario {
  id: number,
  nombre: string,
  apellido: string,
  edad: number,
  createdAt: string,
  updatedAt: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* constructor(private http: HttpClient) { }

  ngOnInit() {
    const data: Observable<IUsuario[]> = this.http.get<IUsuario[]>("http://javascript.tibajodemanda.com/listar", { observe: "body", responseType: "json" })

    data.subscribe(
      (registros: IUsuario[]) => {
        console.table(registros)
      },
      (error: any) => {
        console.log(error)
      }
    ) */

    /* this.http.get<IUsuario[]>("http://javascript.tibajodemanda.com/listar", { observe: "body", responseType: "json" })
      .subscribe(
          (registros: IUsuario[]) => {
            console.table(registros)
          },
          (error: any) => {
            console.log(error)
          }
      ) 


  }*/


}
