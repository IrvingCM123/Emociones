import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../datos/datos.service';


@Component({
  selector: 'app-tema-principal',
  templateUrl: './tema-principal.component.html',
  styleUrls: ['./tema-principal.component.css']
})
export class TemaPrincipalComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  data: any;
  enlace: string = '';
  private validRoutes: Set<string> = new Set([
    'tema1',
    'tema2',
  ]);

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const routePath = url[0] && this.validRoutes.has(url[0].path) ? url[0].path : 'tema1';
      console.log(routePath);
  
      this.data = this.dataService.getData(routePath);
    });
  }
  }


