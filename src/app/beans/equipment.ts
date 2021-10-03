export class Equipment {

  private name: string;
  private description: string;
  private size: number;
  private wieghtMetric: number;
  private wieghtImperial: number;

  constructor(name: string, description: string, size: number, wieghtMetric: number, wieghtImperial: number) {
    this.name = name;
    this.description = description;
    this.size = size;
    this.wieghtMetric = wieghtMetric;
    this.wieghtImperial = wieghtImperial;
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
   * Getter size
   * @return {number}
   */
  public get $size(): number {
    return this.size;
  }

  /**
   * Getter wieghtMetric
   * @return {number}
   */
  public get $wieghtMetric(): number {
    return this.wieghtMetric;
  }

  /**
   * Getter wieghtImperial
   * @return {number}
   */
  public get $wieghtImperial(): number {
    return this.wieghtImperial;
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
   * Setter size
   * @param {number} value
   */
  public set $size(value: number) {
    this.size = value;
  }

  /**
   * Setter wieghtMetric
   * @param {number} value
   */
  public set $wieghtMetric(value: number) {
    this.wieghtMetric = value;
  }

  /**
   * Setter wieghtImperial
   * @param {number} value
   */
  public set $wieghtImperial(value: number) {
    this.wieghtImperial = value;
  }

}
