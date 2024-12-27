import { Component, OnInit } from '@angular/core';
import { Equipe, equipes, ordenarEquipes } from '../../dados/equipe';

@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.scss'
})
export class DashboadComponent implements OnInit {
  equipes: Equipe[] = []; // Inicializa como array vazio

  ngOnInit(): void {
    const equipesOrdenadas = ordenarEquipes(equipes); // Ordena as equipes BASE

    this.equipes = equipesOrdenadas.map((equipe, index) => ({ //Cria um novo array com as posições
        ...equipe,
        status: this.definirStatus(index + 1),
        posicao: (index + 1),
    }));



  }

  definirStatus(posicao: number): string {
    if (posicao <= 5) { // classificado
      return 'borda-azul';
    }else if (posicao >= 6 && posicao <= 18) {
      return ''; // nada
    }else{
      return 'borda-vermelho'; // rebaixado
    }
  }

}
