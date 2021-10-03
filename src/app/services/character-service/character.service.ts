import { Injectable } from '@angular/core';
import { Character } from 'src/app/beans/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  currentCharacter = new Character();

  constructor() { }
}
