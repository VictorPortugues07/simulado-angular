import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './models/nav-bar/nav-bar';
import { Card } from './models/card/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Jogador } from './models/jogador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Card, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  textoBusca = '';
  posicoesSelecionadas: string[] = [];
  jogadoresEscalados: Jogador[] = [];

  posicoes = ['GOL', 'ATA', 'LAT', 'MEI', 'ZAG'];

  jogadores = [
    new Jogador('Adriano', 41, 10, 'ATA', 'adriano.jpg'),
    new Jogador('Ronaldo', 45, 9, 'ATA', 'ronaldo.jpg'),
    new Jogador('Cristiano Ronaldo', 39, 7, 'ATA', 'cr7.jpg'),
    new Jogador('Balotelli', 34, 45, 'ATA', 'balotelli.jpg'),
    new Jogador('Seedorf', 48, 10, 'MEI', 'seedorf.jpg'),
    new Jogador('Renato', 44, 8, 'MEI', 'renato.jpg'),
    new Jogador('O Bruxo', 45, 10, 'MEI', 'bruxo.jpg'),
    new Jogador('Bebeto', 59, 20, 'ATA', 'bebeto.jpg'),
    new Jogador('Freky', 27, 13, 'ATA', 'freky.avif'),
    new Jogador('Catjam', 23, 17, 'MEI', 'catjam.avif'),
    new Jogador('Hackermans', 29, 4, 'ZAG', 'hackermans.avif'),
    new Jogador('Benzema', 38, 9, 'ATA', 'benzema.jpg'),
    new Jogador('Kahn', 56, 1, 'GOL', 'kahn.jpg'),
    new Jogador('Pelé', 82, 10, 'ATA', 'rei.jpg'),
    new Jogador('Buffon', 47, 1, 'GOL', 'buffon.jpg'),
    new Jogador('Roberto Carlos', 52, 6, 'LAT', 'r6.jpg'),
    new Jogador('Taffarel', 59, 12, 'GOL', 'taffarel.jpg'),
    new Jogador('Maradona', 63, 10, 'MEI', 'maradona.jpg'),
  ];

  togglePosicao(posicao: string) {
    const selecionada = this.posicoesSelecionadas.includes(posicao);
    this.posicoesSelecionadas = selecionada
      ? this.posicoesSelecionadas.filter((p) => p !== posicao)
      : [...this.posicoesSelecionadas, posicao];
  }

  buscarJogadores(): Jogador[] {
    const busca = this.textoBusca.toLowerCase();

    return this.jogadores.filter((jogador) => {
      const passaNome =
        !this.textoBusca || jogador.nome.toLowerCase().includes(busca);

      const passaPosicao =
        this.posicoesSelecionadas.length === 0 ||
        this.posicoesSelecionadas.includes(jogador.posicao);

      const naoEscalado = !this.jogadoresEscalados.includes(jogador);

      return passaNome && passaPosicao && naoEscalado;
    });
  }

  escalarJogador(jogador: Jogador) {
    this.jogadoresEscalados.push(jogador);
  }

  removerJogador(jogador: Jogador) {
    this.jogadoresEscalados = this.jogadoresEscalados.filter(
      (j) => j !== jogador
    );
  }
}
