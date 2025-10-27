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
  protected title = 'simulado-angular';

  // Variável para o campo de busca
  textoBusca: string = '';

  // Posição selecionada
  posicaoSelecionada: string = 'GOL';

  // Lista de jogadores escalados (vai aparecer na tabela)
  jogadoresEscalados: Jogador[] = [];

  // Lista de todos os jogadores disponíveis
  todosJogadores: Jogador[] = [
    {
      id: 1,
      nome: 'Oliver Kahn',
      nomeCurto: 'Kahn',
      idade: 56,
      numero: 1,
      posicao: 'GOL',
      time: 'KARLSRUHER SC',
      imagem: 'https://via.placeholder.com/250x260/1fa43f/ffffff?text=Kahn',
    },
    {
      id: 2,
      nome: 'Adriano Silva',
      nomeCurto: 'Adriano',
      idade: 28,
      numero: 10,
      posicao: 'ATA',
      time: 'FC BARCELONA',
      imagem: 'https://via.placeholder.com/250x260/2e8fde/ffffff?text=Adriano',
    },
    {
      id: 3,
      nome: 'Carlos Costa',
      nomeCurto: 'Costa',
      idade: 25,
      numero: 2,
      posicao: 'LAT',
      time: 'REAL MADRID',
      imagem: 'https://via.placeholder.com/250x260/ff6b6b/ffffff?text=Costa',
    },
    {
      id: 4,
      nome: 'João Oliveira',
      nomeCurto: 'João',
      idade: 30,
      numero: 8,
      posicao: 'MEI',
      time: 'JUVENTUS',
      imagem: 'https://via.placeholder.com/250x260/ffd93d/000000?text=João',
    },
    {
      id: 5,
      nome: 'Pedro Santos',
      nomeCurto: 'Pedro',
      idade: 27,
      numero: 4,
      posicao: 'ZAG',
      time: 'BAYERN',
      imagem: 'https://via.placeholder.com/250x260/6bcf7f/ffffff?text=Pedro',
    },
    {
      id: 6,
      nome: 'Manuel Neuer',
      nomeCurto: 'Neuer',
      idade: 38,
      numero: 1,
      posicao: 'GOL',
      time: 'BAYERN',
      imagem: 'https://via.placeholder.com/250x260/1fa43f/ffffff?text=Neuer',
    },
  ];

  // Posições disponíveis
  posicoes: string[] = ['GOL', 'ATA', 'LAT', 'MEI', 'ZAG'];

  // Selecionar posição
  selecionarPosicao(posicao: string) {
    this.posicaoSelecionada = posicao;
  }

  // Buscar jogadores filtrados
  buscarJogadores(): Jogador[] {
    return this.todosJogadores.filter((jogador) => {
      // Filtra por nome
      const filtroNome =
        this.textoBusca === '' ||
        jogador.nome.toLowerCase().includes(this.textoBusca.toLowerCase());

      // Filtra por posição
      const filtroPosicao = jogador.posicao === this.posicaoSelecionada;

      // Remove jogadores já escalados
      const naoEscalado = !this.jogadoresEscalados.find(
        (j) => j.id === jogador.id
      );

      return filtroNome && filtroPosicao && naoEscalado;
    });
  }

  // Escalar jogador
  escalarJogador(jogador: Jogador) {
    this.jogadoresEscalados.push(jogador);
  }

  // Remover jogador
  removerJogador(jogador: Jogador) {
    this.jogadoresEscalados = this.jogadoresEscalados.filter(
      (j) => j.id !== jogador.id
    );
  }
}
