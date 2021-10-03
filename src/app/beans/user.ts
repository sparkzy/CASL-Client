export class User {

  // private id: number;
  private email: string;
  private displayName: string;
  private password: string;

  constructor(email: string, displayName: string, password: string) {
    this.email = email;
    this.displayName = displayName;
    this.password = password;
  }

  /**
   * Getter id
   * @return {number}
   */
  // public get $id(): number {
  //   return this.id;
  // }

  /**
   * Getter email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter displayName
   * @return {string}
   */
  public get $displayName(): string {
    return this.displayName;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Setter id
   * @param {number} value
   */
  // public set $id(value: number) {
  //   this.id = value;
  // }

  /**
   * Setter email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter displayName
   * @param {string} value
   */
  public set $displayName(value: string) {
    this.displayName = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }

}
