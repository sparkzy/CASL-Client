import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Character, defaultAttributes, defaultResources, defaultSkills } from 'src/app/beans/character';
import { Card } from 'src/app/beans/card';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character-service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  characters = [
    new Character('Kulo', 26, 'Human', '5\'9"', '155lbs', defaultAttributes, defaultSkills, defaultResources, 'Bobby'),
    new Character('Da.3', 18, 'Human', '1.81m"', '68kg', defaultAttributes, defaultSkills, defaultResources, 'Bobby'),
    new Character('Relhaz', 22, 'Human', '6\'0"', '175lbs', defaultAttributes, defaultSkills, defaultResources, 'Ben'),
    new Character('Randy Nitro', 30, 'Human?', '6\'5"', '225lbs', defaultAttributes, defaultSkills, defaultResources, 'Matt'),
    new Character('Oretara', 24, 'Wood Elf', '5\'4"', '125lbs', defaultAttributes, defaultSkills, defaultResources, 'Charles'),
    new Character('Poellen Bivex', 21, 'Tiefling', '5\'6"', '130lbs', defaultAttributes, defaultSkills, defaultResources, 'Bobby')
  ]

  games = [
    { title: 'Corona Extra', gm: 'Matt Mark', lastSession: new Date(), nextSession: new Date() },
    { title: 'Grude on Venus', gm: 'Jack Poblacka', lastSession: new Date(), nextSession: new Date() },
    { title: 'Mystery Mansion', gm: 'Adrian I miss you T_T', lastSession: new Date(), nextSession: new Date() },
    { title: 'Sheep', gm: 'Bobby Dingus', lastSession: new Date(), nextSession: new Date() }
  ]

  useSmallVals = false;

  /** Based on the screen size, switch from standard to one column per row */
  cardData = [
    new Card('character', 'Your Charactrers', 1, 2, 1, 1, this.characters, false),
    new Card('game', 'Your Games', 3, 2, 1, 1, this.games, false),
    // new Card('create', 'Create a game', 4, 2, 1, 1, [], false)
  ]

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.useSmallVals = true;
      } else {
        this.cardData.forEach(() => {
          this.useSmallVals = false;
        });
      }

      return this.cardData;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private characterService: CharacterService) {}

  listItemClick(data: any): void {
    console.log(data);
  }

  characterEdit(character = new Character('', 0, '', '', '', defaultAttributes, defaultSkills, defaultResources, '')): void {
    console.log(character);
    this.characterService.currentCharacter = character;
    console.log(this.characterService.currentCharacter);
    this.router.navigate(['character/edit'])
  }
}
