import { Component, OnInit } from '@angular/core';
import { DataService } from '../datos/datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.component.html',
  styleUrls: ['./tema1.component.css']
})
export class Tema1Component implements OnInit {

  data: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const routePath = url[0] ? url[0].path : 'TemaA';
      this.data = this.dataService.getData(routePath);
    });
  }

}
