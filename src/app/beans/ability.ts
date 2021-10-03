import { Component } from "@angular/core";

export class Ability {

  private name: string;
  private description: string;
  private components: Array<Component>;
  private cost: Map<string, number>;

  constructor(name: string, description: string, components: Array<Component>, cost: Map<string, number>) {
    this.name = name;
    this.description = description;
    this.components = components;
    this.cost = cost;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter components
   * @return {Array<Component>}
   */
  public get $components(): Array<Component> {
    return this.components;
  }

  /**
   * Getter cost
   * @return {Map<string, number>}
   */
  public get $cost(): Map<string, number> {
    return this.cost;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter components
   * @param {Array<Component>} value
   */
  public set $components(value: Array<Component>) {
    this.components = value;
  }

  /**
   * Setter cost
   * @param {Map<string, number>} value
   */
  public set $cost(value: Map<string, number>) {
    this.cost = value;
  }


}
