import { Equipment } from "./equipment";

export abstract class AbilityComponent {

  private name: string;


  constructor(name: string) {
    this.name = name;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

}

export class MaterialComponent extends AbilityComponent {


  private equipment: Equipment;

  constructor(name: string, equipment: Equipment) {
    super(name);
    this.equipment = equipment;
  }

  /**
   * Getter equipment
   * @return {equipment}
   */
  public get $equipment(): Equipment {
    return this.equipment;
  }

  /**
   * Setter equipment
   * @param {string} value
   */
  public set $equipment(value: Equipment) {
    this.equipment = value;
  }

}

export class SomaticComponent extends AbilityComponent {

  private description: string;

  constructor(name: string, description: string) {
    super(name);
    this.description = description;
  }

  /**
   * Getter description
   * @return {description}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

}

export class VerbalComponent extends AbilityComponent {

  private description: string;

  constructor(name: string, description: string) {
    super(name);
    this.description = description;
  }

  /**
   * Getter description
   * @return {description}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

}
