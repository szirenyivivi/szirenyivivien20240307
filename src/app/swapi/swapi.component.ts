import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {

  constructor() { }

  dataSource: any[] = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
  }

}
