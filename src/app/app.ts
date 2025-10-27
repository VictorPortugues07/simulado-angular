import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'simulado-angular';
}
