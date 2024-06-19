import { Component, OnInit } from '@angular/core';
import { DataService } from '../datos/datos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.component.html',
  styleUrls: ['./tema1.component.css']
})
export class Tema1Component implements OnInit {

  data: any;
  enlace: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private validRoutes: Set<string> = new Set([
    'home',
    'tema1',
    'tema2',
    'Conciencia emocional',
    'Regulación emocional',
    'Autonomía emocional',
    'Competencias social',
    'Habilidades para la vida y el bienestar',
    'Conciencia emocional.',
    'Regulación emocional.',
    'Autonomía emocional.',
    'Competencias social.',
    'Habilidades para la vida y el bienestar.'
  ]);

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const routePath = url[0] && this.validRoutes.has(url[0].path) ? url[0].path : 'tema1';
      console.log(routePath);
      this.data = this.dataService.getData(routePath);
    });
    console.log(this.data)
  }
}
