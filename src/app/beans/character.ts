import { Ability } from "./ability";
import { Equipment } from "./equipment";
import { Feature } from "./feature";
import { Resource } from "./resource";

export class Character {

  private name: string;
  private age: number;
  private species: string;
  private height: string;
  private weight: string;
  private attributes: Map<string, number>;
  private skills: Map<string, number>;
  private resources: Array<Resource>;
  private player: string;
  private description: string;
  private bio: string;
  private abilities: Array<Ability>;
  private features: Array<Feature>;
  private equipment: Array<Equipment>;

  constructor(name: string = '',
    age = 0,
    species = '',
    height = '',
    weight = '',
    attributes: Map<string, number> = defaultAttributes,
    skills: Map<string, number> = defaultSkills,
    resources: Array<Resource> = defaultResources,
    player: string = '',
    description: string = '',
    bio: string = '',
    abilities: Array<Ability> = [],
    features: Array<Feature> = [],
    equipment: Array<Equipment> = []) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.attributes = attributes;
    this.skills = skills;
    this.resources = resources;
    this.player = player;
    this.description = description;
    this.bio = bio;
    this.abilities = abilities;
    this.features = features;
    this.equipment = equipment
  }

  /**
   * Getter name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter age
   * @return {number}
   */
   public get $age(): number {
    return this.age;
  }

  /**
   * Getter species
   * @return {string}
   */
   public get $species(): string {
    return this.species;
  }

  /**
   * Getter height
   * @return {string}
   */
   public get $height(): string {
    return this.height;
  }

  /**
   * Getter weight
   * @return {string}
   */
   public get $weight(): string {
    return this.weight;
  }

  /**
   * Getter attributes
   * @return {Map<string, number>}
   */
  public get $attributes(): Map<string, number> {
    return this.attributes;
  }

  /**
   * Getter skills
   * @return {Map<string, number>}
   */
  public get $skills(): Map<string, number> {
    return this.skills;
  }

  /**
   * Getter resources
   * @return {Array<Resource>}
   */
  public get $resources(): Array<Resource> {
    return this.resources;
  }

  /**
   * Getter player
   * @return {string}
   */
  public get $player(): string {
    return this.player;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter bio
   * @return {string}
   */
  public get $bio(): string {
    return this.bio;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter age
   * @param {number} value
   */
   public set $age(value: number) {
    this.age = value;
  }

  /**
   * Setter species
   * @param {string} value
   */
   public set $species(value: string) {
    this.species = value;
  }

  /**
   * Setter height
   * @param {string} value
   */
   public set $height(value: string) {
    this.height = value;
  }

  /**
   * Setter weight
   * @param {string} value
   */
   public set $weight(value: string) {
    this.weight = value;
  }

  /**
   * Setter attributes
   * @param {Map<string, number>} value
   */
  public set $attributes(value: Map<string, number>) {
    this.attributes = value;
  }

  /**
   * Setter skills
   * @param {Map<string, number>} value
   */
  public set $skills(value: Map<string, number>) {
    this.skills = value;
  }

  /**
   * Setter resources
   * @param {Array<Resource>} value
   */
  public set $resources(value: Array<Resource>) {
    this.resources = value;
  }

  /**
   * Setter player
   * @param {string} value
   */
  public set $player(value: string) {
    this.player = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter bio
   * @param {string} value
   */
  public set $bio(value: string) {
    this.bio = value;
  }

  /**
  * Getter features
  * @return {Array<Feature>}
  */
  public get $features(): Array<Feature> {
    return this.features;
  }

  /**
   * Setter features
   * @param {Array<Feature>} value
   */
  public set $features(value: Array<Feature>) {
    this.features = value;
  }

  /**
   * Getter equipment
   * @return {Array<Equipment>}
   */
  public get $equipment(): Array<Equipment> {
    return this.equipment;
  }

  /**
   * Setter equipment
   * @param {Array<Equipment>} value
   */
  public set $equipment(value: Array<Equipment>) {
    this.equipment = value;
  }

  /**
   * Getter abilities
   * @return {Array<Ability>}
   */
  public get $abilities(): Array<Ability> {
    return this.abilities;
  }

  /**
   * Setter abilities
   * @param {Array<Ability>} value
   */
  public set $abilities(value: Array<Ability>) {
    this.abilities = value;
  }
}

export let defaultAttributes = new Map<string, number>([
  ['Strength', 1],
  ['Speed', 1],
  ['Flexibility', 1],
  ['Balance', 1],
  ['Dexterity', 1],
  ['Toughness', 1],
  ['Agility', 1],
  ['Reflex', 1],
  ['Learning', 1],
  ['Logic', 1],
  ['Wit', 1],
  ['Will', 1],
  ['Fortitude', 1],
  ['Imagination', 1],
  ['Acuity', 1],
  ['Focus', 1]
]);

export let defaultSkills = new Map<string, number>([
  ['1-handed', 0],
  ['2-handed', 0],
  ['2-handed apart', 0],
  ['Swing', 0],
  ['Chop', 0],
  ['Thrust', 0],
  ['Throw', 0],
  ['Sling', 0],
  ['Elastic', 0],
  ['Static', 0],
  ['Block', 0],
  ['Light Armor', 0],
  ['Medium armor', 0],
  ['Heavy armor', 0],
  ['Whip', 0],
  ['Stealth', 0],
  ['Medical', 0],
  ['Security', 0],
  ['Slight of Hand', 0],
  ['Animal Handling', 0],
  ['Intimidation', 0],
  ['Performance', 0],
  ['Pilot', 0],
  ['Deception', 0],
  ['Persuassion', 0],
  ['Energy', 0],
  ['Illusion', 0],
  ['Summoning', 0],
  ['Mainpulation', 0],
  ['Mind', 0],
  ['Control', 0],
  ['Insight', 0],
  ['Survival', 0],
  ['Hand-to-Hand', 0]
])

export let defaultResources = [
  new Resource('HP', 0, 0, 0, 0, 0),
  new Resource('Stamina', 0, 0, 0, 0, 0),
  new Resource('Mental', 0, 0, 0, 0, 0),
  new Resource('Energy', 0, 0, 0, 0, 0)
];
