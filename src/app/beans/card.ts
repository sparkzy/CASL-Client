export class Card {

  private type: string;
  private title: string;
  private cols: number;
  private rows: number;
  private smallCols: number;
  private smallRows: number;
  private data: any;
  private iconShow: boolean;

  constructor(type: string, title: string, cols: number, rows: number, smallCols: number, smallRows: number, data: any, iconShow: boolean) {
    this.type = type;
    this.title = title;
    this.cols = cols;
    this.rows = rows;
    this.smallCols = smallCols;
    this.smallRows = smallRows;
    this.data = data;
    this.iconShow = iconShow;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get $type(): string {
    return this.type;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter cols
   * @return {number}
   */
  public get $cols(): number {
    return this.cols;
  }

  /**
   * Getter rows
   * @return {number}
   */
  public get $rows(): number {
    return this.rows;
  }

  /**
   * Getter smallCols
   * @return {number}
   */
  public get $smallCols(): number {
    return this.smallCols;
  }

  /**
   * Getter smallRows
   * @return {number}
   */
  public get $smallRows(): number {
    return this.smallRows;
  }

  /**
   * Getter data
   * @return {any}
   */
  public get $data(): any {
    return this.data;
  }

  /**
   * Getter iconShow
   * @return {boolean}
   */
  public get $iconShow(): boolean {
    return this.iconShow;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set $type(value: string) {
    this.type = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter cols
   * @param {number} value
   */
  public set $cols(value: number) {
    this.cols = value;
  }

  /**
   * Setter rows
   * @param {number} value
   */
  public set $rows(value: number) {
    this.rows = value;
  }

  /**
   * Setter smallCols
   * @param {number} value
   */
  public set $smallCols(value: number) {
    this.smallCols = value;
  }

  /**
   * Setter smallRows
   * @param {number} value
   */
  public set $smallRows(value: number) {
    this.smallRows = value;
  }

  /**
   * Setter data
   * @param {any} value
   */
  public set $data(value: any) {
    this.data = value;
  }

  /**
   * Setter iconShow
   * @param {boolean} value
   */
  public set $iconShow(value: boolean) {
    this.iconShow = value;
  }

  iconToggle(card: Card): void {
    card.iconShow = !card.iconShow;
  }

}
