import { Component, OnInit } from '@angular/core';
import { DataService } from '../datos/datos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  enlace: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const routePath = url[0] ? url[0].path : 'Conciencia emocional';
      this.data = this.dataService.getData(routePath);
    });
  }

  actualizarTema(event: Event): void {
    this.enlace = (event.target as HTMLInputElement).value;
    this.router.navigate([this.enlace]);
    console.log(this.enlace);
  }

}
