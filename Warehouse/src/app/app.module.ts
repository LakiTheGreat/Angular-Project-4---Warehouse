import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { AboutComponent } from './core/about/about.component';
import { DocumentPageComponent } from './dynamic/document-page/document-page.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DocumentDetailsComponent } from './dynamic/document-page/document-details/document-details.component';
import { DocumentArticlesComponent } from './dynamic/document-page/document-articles/document-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    DocumentPageComponent,
    PaginationComponent,
    DocumentDetailsComponent,
    DocumentArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
