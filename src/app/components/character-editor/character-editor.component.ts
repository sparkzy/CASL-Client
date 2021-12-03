import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/beans/card';
import { Character } from 'src/app/beans/character';
import { CharacterService } from 'src/app/services/character-service/character.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  smallCols: number;
  smallRows: number;
  text: string;
  valid: boolean;
}

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.sass']
})
export class CharacterEditorComponent implements OnInit {

  useSmallVals = false;
  character = new Character();
  bio = '';
  maxPoinits = 80;
  attributePoints = this.maxPoinits;
  attributes = new Map<string, number>();
  skills = new Map<string, number>();
  attributeTiles = new Array<Tile>();
  skillTiles = new Array<Tile>();

  nameFormControl: FormControl;
  speciesFormControl: FormControl;
  ageFormControl: FormControl;
  heightFormControl: FormControl;
  weightFormControl: FormControl;
  backstoryFormControl: FormControl;
  descriptionFormControl: FormControl;

  // nameFormControl: FormControl; = new FormControl('', [Validators.required]);
  // speciesFormControl: FormControl; = new FormControl('', [Validators.required]);
  // ageFormControl: FormControl; = new FormControl('', [Validators.pattern('/^\d+$/')]);
  // heightFormControl: FormControl; = new FormControl('', [Validators.required]);
  // weightFormControl: FormControl; = new FormControl('', [Validators.required]);
  // backstoryFormControl: FormControl; = new FormControl('');
  // descriptionFormControl: FormControl; = new FormControl('');

  infoCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.useSmallVals = true;
      } else {
        this.infoData.forEach(() => {
          this.useSmallVals = false;
        });
      }

      return this.infoData;
    })
  );

  safeCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.useSmallVals = true;
      } else {
        this.infoData.forEach(() => {
          this.useSmallVals = false;
        });
      }

      return this.safeData;
    })
  );

  infoData = [
    new Card('name', '', 8, 1, 7, 1, this.bio, false),
    new Card('bio', 'Bio', 4, 8, 7, 1, this.bio, false),
    new Card('description', 'Description', 4, 8, 7, 1, this.bio, false)
  ];

  safeData = [
    new Card('attribute', 'Stats', 2, 4, 7, 1, this.attributeTiles, false),
    new Card('ability', 'Abilities', 3, 4, 7, 1, this.bio, false),
    new Card('feature', 'Features', 3, 4, 7, 1, this.bio, false),
    new Card('equipment', 'Equipment', 8, 2, 7, 1, this.bio, false),
    // new Card('feature', 'Features', 2, 2, 7, 1, this.bio, false)
  ]

  // attributeFCs = new Map<string, FormControl>();
  // attributeFC = new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]);

  constructor(private formBuilder: FormBuilder, private characterService: CharacterService, private breakpointObserver: BreakpointObserver) {
    this.character = this.characterService.currentCharacter;
    this.character.$attributes.forEach((value: number, key: string) => {
      this.attributeTiles.push({ text: key, cols: 1, rows: 1, smallCols: 1, smallRows: 2, color: '', valid: true });
      this.attributes.set(key, value);
      // this.attributeFCs.set(key, new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]));
    });

    this.nameFormControl = new FormControl(this.character.$name, [Validators.required]);
    this.speciesFormControl = new FormControl(this.character.$species, [Validators.required]);
    this.ageFormControl = new FormControl(this.character.$age, [Validators.pattern('/^\d+$/')]);
    this.heightFormControl = new FormControl(this.character.$height, [Validators.required]);
    this.weightFormControl = new FormControl(this.character.$weight, [Validators.required]);
    this.backstoryFormControl = new FormControl(this.character.$bio);
    this.descriptionFormControl = new FormControl(this.character.$description);
  }

  ngOnInit(): void {
    // this.character.$skills.forEach((value: number, key: string) => {
    //   this.skillTiles.push({ text: key, cols: 1, rows: 1, smallCols: 1, smallRows: 2, color: '', valid: true });
    //   this.skills.set(key, value);
    // });
    // this.infoData[0].data(this.tiles);
    // if (this.attributeFCs.size < 1) {
    //   this.attributeFCs.set('temp', new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]));
    // }
  }

  submit(): void {
    this.character.$attributes = this.attributes;
    console.log(this.character);
  }

  updateAttributes(): void {
    let cost = 0;
    this.attributes.forEach((value: number, key: string) => {
      console.log(this.calcCost(value));
      const valCost = this.calcCost(value)
      cost += this.calcCost(value);
    });
    this.attributePoints = this.maxPoinits - cost;
  }

  calcCost(value: number): number {
    if (value > 1) {
      return this.calcCost(value - 1) + Math.trunc(value / 2);
    } else {
      return 0;
    }
  }

  // getAttributeErrorMessage() {
  //   // const attributeFC = this.attributeFCs?.get(tile);
  //   // if (!attributeFC) {
  //   //   return;
  //   // }
  //   if (this.attributeFC.hasError('required')) {
  //     return 'You must enter a value';
  //   } else if (this.attributeFC.hasError('min')) {
  //     return 'Min value = 1';
  //   } else if (this.attributeFC.hasError('max')) {
  //     return 'Max value = 9';
  //   } else {
  //     return '';
  //   }
  // }

  // getAttributeFC(key: string): FormControl | undefined {
  //   if (this.attributeFCs.get(key) !== undefined) {
  //     return this.attributeFCs.get(key);
  //   } else {
  //     return new FormControl('', [Validators.required, Validators.min(1), Validators.max(9)]);
  //   }
  // }
}
