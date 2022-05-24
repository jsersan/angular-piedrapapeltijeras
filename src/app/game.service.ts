import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  constructor() {}

  /**
   * Math Random para generar un random y multiplicamos por 3
   * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
   * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
   */
  private getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Piedra, Papel, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }
  
  game(
    userChoice: string,
    miHerramienta: string,
    suHerramienta: string
  ): {
    message: string;
    userAdd: number;
    compAdd: number;
    
  } {
    
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);

  
    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
    };

    console.log(playUserComp);
    switch(playUserComp.substring(0,1)){
      case 'r': miHerramienta = 'piedra'; break;
      case 'p': miHerramienta = 'papel'; break;
      case 's': miHerramienta = 'tijeras'; break;
    }

    switch(playUserComp.substring(playUserComp.length,1)){
      case 'r': suHerramienta = 'piedra'; break;
      case 'p': suHerramienta = 'papel'; break;
      case 's': suHerramienta = 'tijeras'; break;
    }
    switch (playUserComp) {
      
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: `Ganas a la computadora con ${miHerramienta} que utilizó ${suHerramienta}`,
          userAdd: 1,
          compAdd: 0,
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        playStatus = {
          message: `Gana la computadora con ${suHerramienta} contra tu ${miHerramienta}`,
          userAdd: 0,
          compAdd: 1,
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        playStatus = {
          message: `Habéis elegido la misma herramienta ${miHerramienta} y habéis empatado`,
          userAdd: 1,
          compAdd: 1,
        };
        break;
    }
    return playStatus;
  }
}
