export class ArticeItem {
  name: string;
  code: string;
  _id: number;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.code = (obj && obj.code) || '0';
    this._id = (obj && obj._id) || 0;
  }
}
