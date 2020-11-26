import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string ;
  tituloPadre: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
  this.getInfoOfRouteModule()
    .subscribe((evento: any) => {
      this.titulo = evento;
      this.title.setTitle(this.titulo);
      // Para cambiar titulo de la pestaña del navegador
      const metaTag: MetaDefinition ={
        name: 'description',
        content : this.titulo
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {}

  getInfoOfRouteModule(): Observable<any>{
    // Función para obtener la información de la data de la ruta
    return this.router.events.pipe(
      filter(evento => {
        if (evento instanceof ActivationEnd){
          return true;
        }
      }),
      filter((evento: ActivationEnd) => {
        if (evento.snapshot.data.titulo){
          return true;
        }
      }),
      map(resp => {
        this.tituloPadre = resp.snapshot.data.tituloPadre;
        return resp.snapshot.data.titulo;
      })
    );
  }

}
