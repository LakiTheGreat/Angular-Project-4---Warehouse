export class DocumentDetails {
  price: number;
  documents: number;
  _id: number;
  article: string;
  quantity: number;

  constructor(obj?: any) {
    this.price = (obj && obj.price) || 0;
    this.documents = (obj && obj.documents) || 0;
    this._id = (obj && obj._id) || 0;
    this.article = (obj && obj.article) || '';
    this.quantity = (obj && obj.quantity) || 0;
  }
}

export class DocumentDetailsList {
  count: number;
  results: DocumentDetails[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((data: any) => new DocumentDetails(data))) ||
      [];
  }
}
