import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticeItem } from 'src/app/model/article.model';
import { DocumentDetails } from 'src/app/model/document.details.model';

@Component({
  selector: 'app-document-articles',
  templateUrl: './document-articles.component.html',
  styleUrls: ['./document-articles.component.css'],
})
export class DocumentArticlesComponent implements OnInit {
  @Input() listOfArticles: ArticeItem[] = [];
  newItem: DocumentDetails = new DocumentDetails();
  @Output()
  itemAdded = new EventEmitter<DocumentDetails>();

  constructor() {}

  ngOnInit(): void {}

  saveItem() {
    this.itemAdded.emit(this.newItem);
    console.log(this.newItem);
  }
}
