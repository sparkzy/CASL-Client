export class Feature {

  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
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

}
