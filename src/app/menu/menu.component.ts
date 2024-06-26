import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  isSidebarOpen = false;

  toggleNavbar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  isInicioRouteActive() {
    return this.router.url === '/home';
  }

  isTema1RouteActive() {
    return this.router.url === '/Tema1';
  }

  isTema2RouteActive() {
    return this.router.url === '/Tema2';
  }
  

}
