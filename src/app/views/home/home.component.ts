import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data;
  displayedColumns: string[] = [
    'number',
    'name',
    'lastname',
    'email',
    'phone',
    'career',
  ];
  constructor() {}

  ngOnInit(): void {}
}
