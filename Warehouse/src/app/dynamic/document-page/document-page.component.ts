import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowAltCircleDown,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { ArticeItem } from 'src/app/model/article.model';
import { DocumentList } from 'src/app/model/documents.model';
import { DocumentsService } from 'src/app/service/documents.service';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css'],
})
export class DocumentPageComponent implements OnInit {
  constructor(private service: DocumentsService, private router: Router) {}
  faCoffee = faArrowAltCircleDown;
  documentList: DocumentList = new DocumentList();

  showParagraph: boolean = false;

  params = {
    page: 1,
    pageSize: 10,
    sort: 'dateOfCreation',
    sortDirection: 'asc',
  };

  tableShow = {
    dateOfCreation: true,
    dateOfRecording: true,
    status: true,
    transactionType: true,
    businessPartner: true,
    businessPartnerLocation: true,
    year: true,
  };

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.service.getDocuments(this.params).subscribe({
      next: (documents: DocumentList) => {
        console.log(documents);
        this.documentList = documents;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onChangePage(newPage: number) {
    this.params.page = newPage;
    this.getDocuments();
  }
  changeSortBy(sortValue: string) {
    if (this.params.sort == sortValue) {
      this.params.sortDirection =
        this.params.sortDirection == 'asc' ? 'desc' : 'asc';
    } else {
      this.params.sort = sortValue;
    }

    this.getDocuments();
  }
  parOpenClose() {
    this.showParagraph = !this.showParagraph;
  }

  opetDetails(id: number) {
    this.router.navigate(['document', id]);
  }
}
