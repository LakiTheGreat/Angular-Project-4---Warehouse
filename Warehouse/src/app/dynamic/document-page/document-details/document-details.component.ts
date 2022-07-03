import { splitNsName } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticeItem } from 'src/app/model/article.model';

import {
  DocumentDetails,
  DocumentDetailsList,
} from 'src/app/model/document.details.model';
import { WhDocument } from 'src/app/model/documents.model';

import { DocumentsService } from 'src/app/service/documents.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css'],
})
export class DocumentDetailsComponent implements OnInit {
  documentId: number = 0;
  document: WhDocument = new WhDocument();
  listOfArticles: ArticeItem[] = [];
  documentsList: DocumentDetailsList = new DocumentDetailsList();
  recivedArticle: DocumentDetails = new DocumentDetails();

  constructor(
    private route: ActivatedRoute,
    private service: DocumentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.documentId = params['documentId'];
      this.getDocumentDetailsList();
      this.getDocument();
      this.getArticles();
    });
  }
  getDocument() {
    this.service.getDocument(this.documentId).subscribe({
      next: (data: WhDocument) => {
        console.log(data);
        this.document = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getDocumentDetailsList() {
    this.service.getDocumentDetails(this.documentId).subscribe({
      next: (data: DocumentDetailsList) => {
        console.log(data);
        this.documentsList = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getArticles() {
    this.service.getArticles().subscribe({
      next: (articles: ArticeItem[]) => {
        console.log(articles);
        this.listOfArticles = articles;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  postArticle() {
    this.service.postArticle(this.documentId, this.recivedArticle).subscribe({
      next: (data: DocumentDetails) => {
        console.log(`xxx${data}`);
        alert('success');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }

  record() {
    this.document.dateOfRecording = String(new Date());
    this.putDocument();
  }

  putDocument(): void {
    this.service.putDocument(this.documentId, this.document).subscribe({
      next: (data: WhDocument) => {
        console.log(data);
        console.log('success');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }

  articleToName(article: string) {
    let name = '';
    for (let art of this.listOfArticles) {
      if (art.code == article) {
        name = art.name;
      } else {
        // name = article;
      }
    }
    return name;
  }

  addArticle(art: DocumentDetails) {
    console.log(art);
    this.recivedArticle = art;
    console.log(this.recivedArticle);
    this.postArticle();
  }
}
