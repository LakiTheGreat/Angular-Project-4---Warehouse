import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentArticlesComponent } from './document-articles.component';

describe('DocumentArticlesComponent', () => {
  let component: DocumentArticlesComponent;
  let fixture: ComponentFixture<DocumentArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
