import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../datos/datos.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  data: any;
  public Titulo: any;
  public Conclusion: any;
  public Preguntas: any;
  enlace: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const routePath = url[0] ? url[0].path : 'encuesta';
      console.log(routePath);
      this.data = this.dataService.getData(routePath);
    });
    console.log(this.data)
    this.Titulo = this.data[0].Titulo;
    console.log(this.Titulo, "Tit ");
    this.Conclusion = this.data[this.data.length - 1];
    console.log(this.Conclusion, "Conclusion")
    this.Preguntas = this.data.slice(1, this.data.length - 1);
    this.Preguntas = this.Preguntas.map((pregunta: { Respuestas: string; }) => {
      const respuestas = pregunta.Respuestas.split(';').map(respuesta => respuesta.trim());
      return {
        ...pregunta,
        Respuestas: respuestas
      };
    });
    console.log(this.Preguntas, "Preguntas");
  }

}
