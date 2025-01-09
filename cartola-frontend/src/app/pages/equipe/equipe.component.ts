import { Equipe } from '../../api/service/equipe/equipe';
import { EquipeService } from './../../api/service/equipe/equipe.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent implements OnInit {

  equipeService = inject(EquipeService);
  equipes: Equipe[] = [];

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(equipes => {
      this.equipes = equipes;
    });
  }

}
