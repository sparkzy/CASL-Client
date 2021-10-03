export class Resource {

  private name: string;
  private current: number;
  private bonus: number;
  private used: number;
  private penalty: number;
  private max: number;


  constructor(name: string, current: number, bonus: number, used: number, penalty: number, max: number) {
    this.name = name;
    this.current = current;
    this.bonus = bonus;
    this.used = used;
    this.penalty = penalty;
    this.max = max;
  }


  /**
   * Getter name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter current
   * @return {number}
   */
  public get $current(): number {
    return this.current;
  }

  /**
   * Getter bonus
   * @return {number}
   */
  public get $bonus(): number {
    return this.bonus;
  }

  /**
   * Getter used
   * @return {number}
   */
  public get $used(): number {
    return this.used;
  }

  /**
   * Getter penalty
   * @return {number}
   */
  public get $penalty(): number {
    return this.penalty;
  }

  /**
   * Getter max
   * @return {number}
   */
  public get $max(): number {
    return this.max;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter current
   * @param {number} value
   */
  public set $current(value: number) {
    this.current = value;
  }

  /**
   * Setter bonus
   * @param {number} value
   */
  public set $bonus(value: number) {
    this.bonus = value;
  }

  /**
   * Setter used
   * @param {number} value
   */
  public set $used(value: number) {
    this.used = value;
  }

  /**
   * Setter penalty
   * @param {number} value
   */
  public set $penalty(value: number) {
    this.penalty = value;
  }

  /**
   * Setter max
   * @param {number} value
   */
  public set $max(value: number) {
    this.max = value;
  }

}
