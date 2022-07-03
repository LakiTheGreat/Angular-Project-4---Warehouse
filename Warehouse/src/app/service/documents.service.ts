import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticeItem } from '../model/article.model';
import {
  DocumentDetails,
  DocumentDetailsList,
} from '../model/document.details.model';
import { DocumentList, WhDocument } from '../model/documents.model';

const baseUrl = 'http://localhost:3000/api/documents';
@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocuments(params?: any): Observable<DocumentList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get(baseUrl, options).pipe(
      map((data: any) => {
        return new DocumentList(data);
      })
    );
  }

  getArticles(): Observable<ArticeItem[]> {
    return this.http.get(`http://localhost:3000/api/articles`).pipe(
      map((data: any) => {
        return (
          (data.results && data.results.map((x: any) => new ArticeItem(x))) ||
          []
        );
      })
    );
  }

  getDocument(id: number): Observable<WhDocument> {
    return this.http.get(`${baseUrl}/${id}`).pipe(
      map((data: any) => {
        return new WhDocument(data);
      })
    );
  }

  getDocumentDetails(id: number): Observable<DocumentDetailsList> {
    return this.http.get(baseUrl + '/' + id + '/' + 'items').pipe(
      map((data: any) => {
        return new DocumentDetailsList(data);
      })
    );
  }

  putDocument(id: number, doc: WhDocument): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, doc).pipe(
      map((data: any) => {
        return new WhDocument(data);
      })
    );
  }

  postArticle(id: number, art: DocumentDetails): Observable<any> {
    return this.http.post(`${baseUrl}/${id}/items`, art).pipe(
      map((data: any) => {
        return new DocumentDetails(data);
      })
    );
  }
}
